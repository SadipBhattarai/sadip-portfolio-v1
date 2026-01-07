
export default function Footer(){
    return (
        <>
        <footer className="footer" id="footer">
      <div className="container">
        <div className="grid-4">
          <div className="grid-4-col footer-about">
            <h3 className="title-sm">About</h3>
            <p className="text">
              Sadip Bhattarai, Graphics designer hailing from Bharatpur, Chitwan.
            </p>
          </div>

          <div className="grid-4-col footer-links">
            <h3 className="title-sm">Links</h3>
            <ul>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="grid-4-col footer-links">
            <h3 className="title-sm">Services</h3>
            <ul>
              <li>
                <a href="#">Corporate Identity</a>
              </li>
              <li>
                <a href="#">Social Media Management</a>
              </li>
              <li>
                <a href="#">Digital Marketing</a>
              </li>
            </ul>
          </div>

          <div className="grid-4-col footer-newstletter">
            <h3 className="title-sm">Subscribe</h3>
            <p className="text">
              Do not have an Newsletter though.
            </p>
            <div className="footer-input-wrap">
              <input type="email" className="footer-input" placeholder="Email" />
              <a href="#" className="input-arrow">
                <i className="fas fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
        <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
        <div className="elfsight-app-5eb6f6af-3a5b-4372-a474-8aef787e4720" data-elfsight-app-lazy></div> 
        <div className="bottom-footer">
          <div className="copyright">
            <p className="text">
              Copyright&copy;2023 All rights reserved | Made by
              <span> Sadip Bhattarai</span>
            </p> 
          </div>
          <div className="followme-wrap">
            <div className="followme">
              <h3>Follow me</h3>
              <span className="footer-line"></span>
              <div className="social-media">
                <a href="https://www.facebook.com/sadipbhattarai">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/SadipBhattarai">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/sadipbhatarai/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/sadip-bhattarai-4ba33220a/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="back-btn-wrap">
              <a href="#" className="back-btn">
                <i className="fas fa-chevron-up"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </>
    );
}