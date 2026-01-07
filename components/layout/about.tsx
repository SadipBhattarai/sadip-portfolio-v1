
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
              <h3 className="title-sm">Hello,I am</h3>
              <p className="text">
                Sadip Bhattarai,
                Graphics Designer, Professional Paralegal Writer, Survey Engineer, IT Student. 
              </p>
              <div className="skills">
                <div className="skill html">
                  <h3 className="skill-title">Illustrator</h3>
                  <div className="skill-bar">
                    <div className="skill-progress" data-progress="90%"></div>
                  </div>
                </div>
                <div className="skill css">
                  <h3 className="skill-title">Photoshop</h3>
                  <div className="skill-bar">
                    <div className="skill-progress" data-progress="70%"></div>
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
          </div>
        </div>
      </section>
  </>
    );
}