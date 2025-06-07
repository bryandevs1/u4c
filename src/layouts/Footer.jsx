import { Link } from "react-router-dom";
const Footer = ({ footerSolidBg }) => {
  return (
    <footer
      className={`site-footer ${
        footerSolidBg ? "" : "with-footer-cta with-footer-bg"
      }`}
    >
      {!footerSolidBg && (
        <div className="footer-cta">
          <div className="container">
            <div className="row justify-content-lg-between justify-content-center align-items-center">
              <div className="col-lg-7 col-md-8 col-sm-10">
                <span className="cta-tagline">
                  No 1. Crowdfunding Funding Platform in Nigeria
                </span>
                <h3 className="cta-title">
                  Lend a Hand to Power Meaningful Change
                </h3>
              </div>
              <div className="col-lg-auto col-md-6">
                <Link
                  to="/explore"
                  className="main-btn bordered-btn bordered-white mt-md-30"
                >
                  Make A Donation <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="footer-content-area">
        <div className="container">
          <div className="footer-widgets">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="widget about-widget">
                  <div className="footer-logo">
                    <img src="assets/img/u4cw.png" alt="u4c" />
                  </div>
                  <p>
                    Our journey is fueled by compassion and a profound
                    mission—to usher transformative change by providing
                    essential resources to communities facing challenges{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-md-5 col-sm-6">
                <div className="widget nav-widget">
                  <h4 className="widget-title">Get Involved</h4>
                  <ul>
                    <li>
                      <Link to="/">Explore Projects</Link>
                    </li>
                    <li>
                      <Link to="/">Completed Projects</Link>
                    </li>
                    <li>
                      <Link to="/">Fundraise</Link>
                    </li>
                    <li>
                      <Link to="/">Donate</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="widget nav-widget">
                  <h4 className="widget-title">About Us</h4>
                  <ul>
                    <li>
                      <Link to="/">Our Mission</Link>
                    </li>
                    <li>
                      <Link to="/">Our Vision</Link>
                    </li>
                    <li>
                      <Link to="/">History</Link>
                    </li>
                    <li>
                      <Link to="/">Team</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-auto col-md-5 col-sm-8">
                <div className="widget contact-widget">
                  <h4 className="widget-title">Contact Us</h4>
                  <ul className="info-list">
                    <li>
                      <span className="icon">
                        <i className="far fa-phone" />
                      </span>
                      <span className="info">
                        <span className="info-title">Phone Number</span>
                        <a href="#">+1-(314) 892-2600</a>
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="far fa-envelope-open" />
                      </span>
                      <span className="info">
                        <span className="info-title">Email Address</span>
                        <a href="#">Holyway@mail.com</a>
                      </span>
                    </li>
                    {/* <li>
                      <span className="icon">
                        <i className="far fa-map-marker-alt" />
                      </span>
                      <span className="info">
                        <span className="info-title">Locations</span>
                        <a href="#">59 Main Street, USA</a>
                      </span>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="row flex-md-row-reverse">
              <div className="col-md-6">
                <ul className="social-icons">
                  <li>
                    <a href="#">Privacy Policy |</a>
                  </li>
                  <li>
                    <a href="#">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-behance" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <p className="copyright-text">
                  © {new Date().getFullYear()}{" "}
                  <a href="#">United 4 Change | All Rights Reserved</a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
