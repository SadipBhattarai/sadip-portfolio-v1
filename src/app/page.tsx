import About from "@/components/layout/about";
import Record from "@/components/layout/record";
import Contact from "@/components/layout/contact";
import Hireme from "@/components/layout/hireme";
import Image from "next/image";
import PortfolioEffects from "@/components/layout/portfolioEffects";
export default function Home() {
  return (
    <>
      <PortfolioEffects />
      <div className="header-content">
        <div className="container grid-2">
          <div className="column-1">
            <h1 className="header-title">Sadip Bhattarai</h1>
            <p className="text">
              Graphics Designer, Computer Hardware Technician, Survey Engineer,
              Paralegal Writer, Design Instructor, Tech enthusiast.
            </p>
            <a href="https://www.sadipbhattarai.com.np" className="btn">
              View Portfolio
            </a>
          </div>

          <div className="column-2 image">
            <div className="points-img">
              <Image src="/Profile.svg" alt="Sadip Bhattarai" fill priority />
            </div>

            <div className="profile-img">
              <Image src="/sadip.png" alt="Sadip Bhattarai" fill priority />
            </div>
          </div>
        </div>
      </div>
      <About />
      <Record />
      <Contact />
      <Hireme />
    </>
  );
}
