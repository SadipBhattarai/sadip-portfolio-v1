
export default function About(){
    return(
        <>
    <section className="about" id="about">
        <div className="container">
          <div className="section-header">
            <h3 className="title" data-title="Who Am I">About me</h3>
          </div>
          <div className="section-body grid-2">
            <div className="column-1">
              <h3 className="title-sm">Hello, I&apos;m</h3>
              <p className="text">
                Sadip Bhattarai, a graphic designer from Bharatpur. I combine a sharp eye for detail with creativity to deliver exceptional results. Let&apos;s collaborate to bring your vision to life.
                </p>
              <div className="skills">
                <div className="skill html">
                  <h3 className="skill-title">Illustrator</h3>
                  <div className="skill-bar">
                    <div className="skill-progress" data-progress="90%" />
                  </div>
                </div>
                <div className="skill css">
                  <h3 className="skill-title">Photoshop</h3>
                  <div className="skill-bar">
                    <div className="skill-progress" data-progress="80%"></div>
                  </div>
                </div>
                <div className="skill js">
                  <h3 className="skill-title">Indesign</h3>
                  <div className="skill-bar">
                    <div className="skill-progress" data-progress="60%"></div>
                  </div>
                </div>
              </div>
              <a href="#" className="btn">Read more</a>
            </div>
            <div className="column-2 image">
              <img src="/sadip.png" className="points" alt="" />
              <img src="/Profile.svg" className="z-index" alt="" />
            </div>
          </div>
        </div>
      </section>
  </>
    );
}