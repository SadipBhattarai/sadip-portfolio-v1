export default function Record(){
    return (
        <>
        <section className="records">
        {/* <div className="overlay overlay-sm">
          <img src="assets/Profile.svg" alt="" className="shape square1" />
          <img src="assets/Profile.svg" alt="" className="shape square2" />
          <img src="./img/shapes/circle.png" alt="" className="shape circle" />
          <img
            src="./img/shapes/half-circle.png"
            alt=""
            className="shape half-circle"
          />
          <img src="./img/shapes/wave.png" alt="" className="shape wave wave1" />
          <img src="./img/shapes/wave.png" alt="" className="shape wave wave2" />
          <img src="./img/shapes/x.png" alt="" className="shape xshape" />
          <img src="./img/shapes/triangle.png" alt="" className="shape triangle" />
        </div> */}

        <div className="container">
          <div className="wrap">
            <div className="record-circle">
              <h2 className="number" data-num="5">0</h2>
              <h4 className="sub-title">Projects</h4>
            </div>
          </div>

          <div className="wrap">
            <div className="record-circle active">
              <h2 className="number" data-num="12">0</h2>
              <h4 className="sub-title">Happy Clients</h4>
            </div>
          </div>

          <div className="wrap">
            <div className="record-circle">
              <h2 className="number" data-num="6000">0</h2>
              <h4 className="sub-title">Work Hour</h4>
            </div>
          </div>

          <div className="wrap">
            <div className="record-circle">
              <h2 className="number" data-num="2">0</h2>
              <h4 className="sub-title">Ongoing Projects</h4>
            </div>
          </div>
        </div>
      </section>
        </>
    );
}