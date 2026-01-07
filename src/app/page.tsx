import About from "@/components/layout/about";
import Record from "@/components/layout/record";
import Contact from "@/components/layout/contact";
import Hireme from "@/components/layout/hireme";
export default function Home() {
  return(
    <>
    <div className="header-content">
          <div className="container grid-2">
            <div className="column-1">
              <h1 className="header-title">Sadip Bhattarai</h1>
              <p className="text-2">
                Hello, I am Sadip Bhattarai, Graphics designer hailing from Chitwan.
                 With a sharp eye for detail and an unwavering commitment to creativity, I approach every project with a unique perspective and a dedication to delivering exceptional results.
                It would be an honor to collaborate with you and bring your vision to life through my design expertise.

              </p>
              <a href="assets/Sadip Resume.pdf" className="btn">Download CV</a>
            </div>

            <div className="column-2 image">
              <img
                src="/public/sadip.png"
                className="points points2"
                alt=""
              />
              <img src="/public/sadip.png" className="img-element z-index" alt="" />
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
