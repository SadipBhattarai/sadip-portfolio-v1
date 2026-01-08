"use client";

import { useEffect } from "react";
import Isotope from "isotope-layout";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export default function PortfolioEffects() {
  useEffect(() => {
    // ---------- Footer input focus ----------
    const footerInput = document.querySelector<HTMLInputElement>(".footer-input");

    const onFocus = () => footerInput?.classList.add("focus");
    const onBlur = () => {
      if (!footerInput) return;
      if (footerInput.value !== "") return;
      footerInput.classList.remove("focus");
    };

    footerInput?.addEventListener("focus", onFocus);
    footerInput?.addEventListener("blur", onBlur);

    // ---------- Hamburger menu ----------
    const hamburger = document.querySelector(".hamburger-menu");
    const navbar = document.querySelector("header nav");
    const links = document.querySelectorAll(".links a");

    const closeMenu = () => {
      navbar?.classList.remove("open");
      document.body.classList.remove("stop-scrolling");
    };

    const toggleMenu = () => {
      if (!navbar) return;
      if (!navbar.classList.contains("open")) {
        navbar.classList.add("open");
        document.body.classList.add("stop-scrolling");
      } else {
        closeMenu();
      }
    };

    hamburger?.addEventListener("click", toggleMenu);
    links.forEach((a) => a.addEventListener("click", closeMenu));

    // ---------- Isotope filtering ----------
    const gridEl = document.querySelector(".grid");
    let iso: Isotope | null = null;

    if (gridEl) {
      iso = new Isotope(gridEl, {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
        transitionDuration: "0.6s",
      });

      const filterBtns = document.querySelectorAll<HTMLButtonElement>(".filter-btn");
      filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          filterBtns.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");

          const filterValue = btn.dataset.filter || "*";
          iso?.arrange({ filter: filterValue });
        });
      });
    }

    // ---------- Scroll effects ----------
    const skillsWrap = document.querySelector(".skills");
    const skillBars = document.querySelectorAll<HTMLElement>(".skill-progress");
    const recordsWrap = document.querySelector(".records");
    const recordNums = document.querySelectorAll<HTMLElement>(".number");

    const checkScroll = (el: Element | null) => {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      // same logic as your file
      return window.innerHeight >= rect.top + (el as HTMLElement).offsetHeight;
    };

    const skillsEffect = () => {
      if (!checkScroll(skillsWrap)) return;
      skillBars.forEach((bar) => {
        const p = bar.dataset.progress;
        if (p) bar.style.width = p;
      });
    };

    const countUp = () => {
      if (!checkScroll(recordsWrap)) return;

      recordNums.forEach((n) => {
        const maxNum = Number(n.dataset.num || "0");
        let current = Number(n.innerText || "0");
        const speed = 100;
        const increment = Math.ceil(maxNum / speed);

        const update = () => {
          current += increment;
          if (current >= maxNum) {
            n.innerText = String(maxNum);
            return;
          }
          n.innerText = String(current);
          setTimeout(update, 10);
        };

        // only start if still 0
        if (Number(n.innerText) === 0) update();
      });
    };

    const onScroll = () => {
      skillsEffect();
      countUp();
    };

    window.addEventListener("scroll", onScroll);
    // run once on load
    onScroll();

    // ---------- Swiper ----------
    let swiper: Swiper | null = null;
    const swiperContainer = document.querySelector(".swiper-container");

    if (swiperContainer) {
      swiper = new Swiper(".swiper-container", {
        speed: 1100,
        slidesPerView: 1,
        loop: true,
        autoplay: { delay: 5000 },
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
      });
    }

    // ---------- Cleanup ----------
    return () => {
      footerInput?.removeEventListener("focus", onFocus);
      footerInput?.removeEventListener("blur", onBlur);

      hamburger?.removeEventListener("click", toggleMenu);
      links.forEach((a) => a.removeEventListener("click", closeMenu));

      window.removeEventListener("scroll", onScroll);

      swiper?.destroy(true, true);
      iso?.destroy();
    };
  }, []);

  return null;
}
