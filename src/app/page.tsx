import About from "@/components/layout/about";
import Record from "@/components/layout/record";
import Contact from "@/components/layout/contact";
import Hireme from "@/components/layout/hireme";
import PortfolioEffects from "@/components/layout/portfolioEffects";
export default function Home() {
  return(
    <>
      {/* <div className="overlay overlay-lg">
          <img src="/window.svg" className="shape square" alt="" />
          <img src="/Profile.svg" className="shape circle" alt="" />
          <img
            src="/Profile.svg"
            className="shape half-circle1"
            alt=""
          />
          <img
            src="/Profile.svg"
            className="shape half-circle2"
            alt=""
          />
          <img src="/Profile.svg" className="shape xshape" alt="" />
          <img src="/Profile.svg" className="shape wave wave1" alt="" />
          <img src="/Profile.svg" className="shape wave wave2" alt="" />
          <img src="/Profile.svg" className="shape triangle" alt="" />
          <img src="/Profile.svg" className="letters" alt="" />
          <img src="/Profile.svg" className="points points1" alt="" />
        </div> */}
        <PortfolioEffects/>
    <div className="header-content">
          <div className="container grid-2">
            <div className="column-1">
              <h1 className="header-title">Sadip Bhattarai</h1>
              <p className="text">
                Graphics Designer, Computer Hardware Technician, Survey Engineer, Paralegal Writer, Design Instructor, Tech enthusiast. 
              
              </p>
              <a href="https://www.sadipbhattarai.com.np" className="btn">View Portfolio</a>
            </div>

            <div className="column-2 image">
              <img
                src="/"
                className="points points2"
                alt=""
              />
              <img src="/sadip.png" className="img-element z-index" alt="" />
            </div>
          </div>
        </div>
    <About/>
    <Record/>
    <Contact/>
    <Hireme/>
    </>
  );
 
}
