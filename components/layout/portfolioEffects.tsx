"use client";

import { useEffect } from "react";
import "swiper/css/bundle";

type IsotopeType = new (
  element: Element | string,
  options?: {
    itemSelector?: string;
    layoutMode?: string;
    transitionDuration?: string;
  }
) => {
  arrange: (opts: { filter: string }) => void;
  destroy: () => void;
};

export default function PortfolioEffects() {
  useEffect(() => {
    let isoInstance: { destroy: () => void; arrange: (opts: { filter: string }) => void } | null = null;
    let swiperInstance: { destroy: (deleteInstance?: boolean, cleanStyles?: boolean) => void } | null = null;

    // ---------- Footer input focus ----------
    const footerInput = document.querySelector<HTMLInputElement>(".footer-input");

    const onFocus = () => footerInput?.classList.add("focus");
    const onBlur = () => {
      if (!footerInput) return;
      if (footerInput.value.trim() !== "") return;
      footerInput.classList.remove("focus");
    };

    footerInput?.addEventListener("focus", onFocus);
    footerInput?.addEventListener("blur", onBlur);

    // ---------- Hamburger menu ----------
    const hamburger = document.querySelector<HTMLElement>(".hamburger-menu");
    const navbar = document.querySelector<HTMLElement>("header nav");
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".links a"));

    const closeMenu = () => {
      navbar?.classList.remove("open");
      document.body.classList.remove("stop-scrolling");
    };

    const toggleMenu = () => {
      if (!navbar) return;
      navbar.classList.toggle("open");
      document.body.classList.toggle("stop-scrolling");
    };

    hamburger?.addEventListener("click", toggleMenu);
    links.forEach((a) => a.addEventListener("click", closeMenu));

    // ---------- Scroll effects (skills + records) ----------
    const skillsWrap = document.querySelector<HTMLElement>(".skills");
    const skillBars = Array.from(document.querySelectorAll<HTMLElement>(".skill-progress"));

    const recordsWrap = document.querySelector<HTMLElement>(".records");
    const recordNums = Array.from(document.querySelectorAll<HTMLElement>(".number"));

    const inView = (el: HTMLElement | null) => {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return rect.top <= window.innerHeight * 0.85;
    };

    const skillsEffect = () => {
      if (!inView(skillsWrap)) return;
      skillBars.forEach((bar) => {
        const p = bar.dataset.progress;
        if (p) bar.style.width = p;
      });
    };

    const countUp = () => {
      if (!inView(recordsWrap)) return;

      recordNums.forEach((n) => {
        // Prevent re-running
        if (n.dataset.started === "true") return;
        n.dataset.started = "true";

        const maxNum = Number(n.dataset.num || "0");
        let current = 0;

        const speed = 80;
        const increment = Math.max(1, Math.ceil(maxNum / speed));

        const update = () => {
          current += increment;
          if (current >= maxNum) {
            n.innerText = String(maxNum);
            return;
          }
          n.innerText = String(current);
          window.setTimeout(update, 12);
        };

        update();
      });
    };

    const onScroll = () => {
      skillsEffect();
      countUp();
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    // ---------- Isotope filtering (dynamic import) ----------
    const initIsotope = async () => {
      const gridEl = document.querySelector<HTMLElement>(".grid");
      if (!gridEl) return;

      const mod = await import("isotope-layout");
      const Isotope = (mod.default ?? mod) as unknown as IsotopeType;

      isoInstance = new Isotope(gridEl, {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
        transitionDuration: "0.6s",
      });

      const filterBtns = Array.from(document.querySelectorAll<HTMLButtonElement>(".filter-btn"));

      const onFilterClick = (btn: HTMLButtonElement) => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const filterValue = btn.dataset.filter || "*";
        isoInstance?.arrange({ filter: filterValue });
      };

      filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => onFilterClick(btn));
      });
    };

    // ---------- Swiper (dynamic import) ----------
    const initSwiper = async () => {
      const swiperContainer = document.querySelector(".swiper-container");
      if (!swiperContainer) return;

      const mod = await import("swiper/bundle");
      const Swiper = (mod.default ?? mod) as unknown as new (selector: string, options: unknown) => {
        destroy: (deleteInstance?: boolean, cleanStyles?: boolean) => void;
      };

      swiperInstance = new Swiper(".swiper-container", {
        speed: 1100,
        slidesPerView: 1,
        loop: true,
        autoplay: { delay: 5000 },
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        },
      });
    };

    initIsotope();
    initSwiper();

    // ---------- Cleanup ----------
    return () => {
      footerInput?.removeEventListener("focus", onFocus);
      footerInput?.removeEventListener("blur", onBlur);

      hamburger?.removeEventListener("click", toggleMenu);
      links.forEach((a) => a.removeEventListener("click", closeMenu));

      window.removeEventListener("scroll", onScroll);

      swiperInstance?.destroy(true, true);
      isoInstance?.destroy();
    };
  }, []);

  return null;
}
