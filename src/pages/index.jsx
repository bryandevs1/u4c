import { Link } from "react-router-dom";
import Slider from "react-slick";
import Counter from "../components//Counter";
import Layout from "../layouts/Layout";
import { projectSliderOne, projectSliderTwo } from "../sliderProps";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".bg-slide");

    const intervalId = setInterval(() => {
      slides[currentSlide]?.classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide]?.classList.add("active");
    }, 5000);

    // Cleanup function
    return () => clearInterval(intervalId);
  }, []);
  return (
    <Layout transparentHeader transparentTop footerSolidBg>
      <section className="hero-area-one">
        <div className="hero-background-slider">
          <div className="bg-overlay"></div>
          <div
            className="bg-slide active"
            style={{
              backgroundImage: "url('../../assets/img/U4C images (4).png')",
            }}
          ></div>
          <div
            className="bg-slide"
            style={{
              backgroundImage: "url('../../assets/img/U4C images (3).png')",
            }}
          ></div>
          <div
            className="bg-slide"
            style={{
              backgroundImage: "url('../../assets/img/U4C images (2).png')",
            }}
          ></div>
        </div>
        <div className="hero-text">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <span
                  className="tagline "
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Crowdfunding Agency
                </span>
                <h1 className="title " data-aos="fade-up" data-aos-delay="400">
                  Merch with a purpose
                </h1>
                <Link
                  to="/project-1"
                  className="main-btn "
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Explore Projects <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-shapes">
            <div className="hero-line-one">
              <img src="assets/img/hero/hero-line.png" alt="Line" />
            </div>
            <div className="hero-line-two">
              <img src="assets/img/hero/hero-line-2.png" alt="Line" />
            </div>
            <div className="dot-one" />
            <div className="dot-two" />
          </div>
        </div>
      </section>
      {/*====== Hero Area End ======*/}

      {/*====== About Section Start ======*/}
      {/* <section className="about-section-one">
        <div className="container">
          <div className="row align-items-center justify-content-lg-start justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="about-img">
                <img src="assets/img/about/about-one.jpg" alt="Image" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-10 offset-xl-1">
              <div className="about-text mt-md-70 mb-md-50">
                <div className="common-heading mb-30">
                  <span className="tagline">
                    <i className="fas fa-plus" /> who we are
                    <span className="heading-shadow-text">Abouit Us</span>
                  </span>
                  <h2 className="title">Why Choose Us</h2>
                </div>
                <p>
                  Sedut perspiciatis unde omnis iste natus voluptatem
                  accusantium dolore dantiumy totam rem apeam, eaque ipsa
                  quaventore veritatis quasi architecto beatae.
                </p>
                <div className="author-note " data-aos="fade-up">
                  <ul>
                    <li>
                      <i className="far fa-check" /> Non-Profite Crowdfunding
                      Agency
                    </li>
                    <li>
                      <i className="far fa-check" />{" "}
                      {`We're Successful Institute`}{" "}
                    </li>
                  </ul>
                  <div className="author-info">
                    <div className="author-img">
                      <img src="assets/img/author-thumbs/01.jpg" alt="Image" />
                    </div>
                    <h5 className="name">Michel H. Heart</h5>
                    <span className="title">CEO &amp; Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== About Section End ======*/}
      {/*====== Project Section Start ======*/}
      <section className="project-section project-section-extra-gap">
        <div className="container-fluid fluid-extra-padding">
          <div className="common-heading text-center color-version-white mb-60">
            <span className="tagline">
              <i className="fas fa-plus" /> Popular Campaigns
              <span className="heading-shadow-text">Our Campaigns</span>
            </span>
            <h2 className=" ">Explore Our Campaigns</h2>
          </div>
          <div className="row project-items no-shadow">
            <div className=" col-12 col-sm-6 col-md-4 mb-4">
              <div className="project-item">
                <div
                  className="thumb"
                  style={{
                    backgroundImage: "url(assets/img/01.png)",
                  }}
                />
                <div className="content">
                  <h2 className="title">
                    <Link to="/">Clean Water and Sanitation.</Link>
                  </h2>
                  <div className="cats">
                    <Link to="/">Ongoing</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/01.png" alt="Thumb" />
                    <Link to="/"> lrichards.dev@gmail.com</Link>
                  </div>
                  <h5 className="title">
                    <Link to="/">
                      Summary Ensure availability and sustainable management of
                      wa ...
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">87%</span>
                    </div>
                    <div className="stats-bar" data-value={87}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div className=" col-12 col-sm-6 col-md-4 mb-4">
              <div className="project-item">
                <div
                  className="thumb"
                  style={{
                    backgroundImage: "url(assets/img/01.png)",
                  }}
                />
                <div className="content">
                  <h2 className="title">
                    <Link to="/"> Good Care and Well Being</Link>
                  </h2>
                  <div className="cats">
                    <Link to="/">Ongoing</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/01.png" alt="Thumb" />
                    <Link to="/"> lrichards.dev@gmail.com</Link>
                  </div>
                  <h5 className="title">
                    <Link to="/">
                      Description In a world where health is truly wealth,
                      access ...
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">87%</span>
                    </div>
                    <div className="stats-bar" data-value={87}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
            <div className=" col-12 col-sm-6 col-md-4 mb-4">
              <div className="project-item">
                <div
                  className="thumb"
                  style={{
                    backgroundImage: "url(assets/img/01.png)",
                  }}
                />
                <div className="content">
                  <h2 className="title">
                    <Link to="/">Support Education</Link>
                  </h2>
                  <div className="cats">
                    <Link to="/">Ongoing</Link>
                  </div>
                  <div className="author">
                    <img src="assets/img/01.png" alt="Thumb" />
                    <Link to="/"> lrichards.dev@gmail.com</Link>
                  </div>
                  <h5 className="title">
                    <Link to="/">
                      Summary The COVID19 crisis has deeply impacted southern
                      Afri ...
                    </Link>
                  </h5>
                  <div className="project-stats">
                    <div className="stats-value">
                      <span className="value-title">
                        Raised of <span className="value">$59,689</span>
                      </span>
                      <span className="stats-percentage">87%</span>
                    </div>
                    <div className="stats-bar" data-value={87}>
                      <div className="bar-line" />
                    </div>
                  </div>
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Project Section End ======*/}
      {/*====== Counter Area Start ======*/}
      <section className="emergency-project-with-cta">
        <div className="container">
          <div className="common-heading text-center mb-60">
            <span className="tagline">
              <i className="fas fa-plus" /> Get Started Now
              <span className="heading-shadow-text">Start Now</span>
            </span>
            <h2 className="title">Start with us Now</h2>
          </div>
        </div>
        {/* FULL-WIDTH CTA BOX - NOT inside container */}
        <div
          className="cta-box cta-double-content full-width"
          style={{ backgroundImage: "url(assets/img/bg.png)" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              {/* LEFT COLUMN */}
              <div className="col-xl-4 col-lg-5 col-md-9">
                <div className="content text-center">
                  <img
                    src="assets/img/save-money.png"
                    alt="Logo"
                    className="cta-logo mb-3"
                    style={{ width: "60px" }}
                  />
                  <h2 className="cta-title">Donate</h2>
                  <p>Explore projects to contribute to around the world.</p>
                  <Link to="/" className="main-btn">
                    Discover Projects <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>

              <div className="col-xl-2 col-lg-1 cta-double-content-gap" />

              {/* RIGHT COLUMN */}
              <div className="col-xl-4 col-lg-5 col-md-9">
                <div className="content text-center">
                  <img
                    src="assets/img/cg.png"
                    alt="Logo"
                    className="cta-logo mb-3"
                    style={{ width: "60px" }}
                  />
                  <h2 className="cta-title">Start A Project</h2>
                  <p>Nonprofits ready to fundraise can start a project here.</p>
                  <Link to="/" className="main-btn">
                    Fundraise <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="counter-section-one mt-negative">
        <div className="container primary-bg">
          <div className="row counter-boxes justify-content-xl-between justify-content-center">
            <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
              <div className="counter-box mb-40 icon-left">
                <div className="icon white-color">
                  <i className="flaticon-crowdfunding" />
                </div>
                <div className="content white-color">
                  <div className="count-wrap">
                    <Counter end={3598} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">We’ve Project Complate</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
              <div className="counter-box mb-40 icon-left">
                <div className="icon white-color">
                  <i className="flaticon-crowdfunding" />
                </div>
                <div className="content white-color">
                  <div className="count-wrap">
                    <Counter end={9634} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">Global Partners</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
              <div className="counter-box mb-40 icon-left">
                <div className="icon white-color">
                  <i className="flaticon-crowdfunding" />
                </div>
                <div className="content white-color">
                  <div className="count-wrap">
                    <Counter end={8565} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">Awards Winning</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-auto col-lg-5 col-md-5 col-sm-6">
              <div className="counter-box mb-40 icon-left">
                <div className="icon white-color">
                  <i className="flaticon-crowdfunding" />
                </div>
                <div className="content white-color">
                  <div className="count-wrap">
                    <Counter end={4756} />
                    <span className="suffix">+</span>
                  </div>
                  <h6 className="title">Active Volunteer</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== Counter Area End ======*/}
      <section className="counter-with-image-text-block">
        <div className="counter-boxes-area primary-soft-bg">
          <div className="container">
            <div className="row counter-boxes justify-content-lg-between justify-content-center">
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <i className="flaticon-crowdfunding" />
                  </div>
                  <div className="content">
                    <div className="count-wrap">
                      <span className="suffix">Global</span>
                    </div>
                    <p>
                      Benefit charitable <br />
                      organizations worldwide
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <i className="flaticon-ecological" />
                  </div>
                  <div className="content">
                    <div className="count-wrap">
                      <span className="suffix">Mission</span>
                    </div>
                    <p>
                      Revolutionize global philanthropy
                      <br />
                      through technology.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <i className="flaticon-badges" />
                  </div>
                  <div className="content">
                    <div className="count-wrap">
                      <span className="suffix">Innovate</span>
                    </div>
                    <p>
                      Bitcoin and <br />
                      Blockchain Technology
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <i className="flaticon-support" />
                  </div>
                  <div className="content">
                    <div className="count-wrap">
                      <span className="suffix">Transparency</span>
                    </div>
                    <p>
                      Provide transparency and <br />
                      accountability to donors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Testimonials End ======*/}
      {/*====== Emergency Project & CTA Start ======*/}

      {/*====== Emergency Project & CTA End ======*/}
      {/*====== Partners Section Start ======*/}
      {/* <section className="partners-section section-gap section-border-bottom">
        <div className="container">
          <div className="common-heading mb-30">
            <span className="tagline">
              <i className="fas fa-plus" /> Our Partners
              <span className="heading-shadow-text">Partners</span>
            </span>
            <h2 className="title">Trusted Partners</h2>
          </div>
          <div className="row partners-logos-one">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="logo mt-30">
                <Link to="/testimonial">
                    <img src="assets/img/partners/01.png" alt="Image" />
                  </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="logo mt-30">
                <Link to="/testimonial">
                    <img src="assets/img/partners/02.png" alt="Image" />
                  </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="logo mt-30">
                <Link to="/testimonial">
                    <img src="assets/img/partners/03.png" alt="Image" />
                  </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="logo mt-30">
                <Link to="/testimonial">
                    <img src="assets/img/partners/04.png" alt="Image" />
                  </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="logo mt-30">
                <Link to="/testimonial">
                    <img src="assets/img/partners/05.png" alt="Image" />
                  </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="logo mt-30">
                <Link to="/testimonial">
                    <img src="assets/img/partners/06.png" alt="Image" />
                  </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="logo mt-30">
                <Link to="/testimonial">
                    <img src="assets/img/partners/07.png" alt="Image" />
                  </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="logo mt-30">
                <Link to="/testimonial">
                    <img src="assets/img/partners/08.png" alt="Image" />
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== Partners Section End ======*/}
      {/*====== Latest News Start ======*/}
      {/* <section className="latest-blog-section section-gap">
        <div className="container">
          <div className="common-heading text-center mb-30">
            <span className="tagline">
              <i className="fas fa-plus" /> Latest News &amp; Blog
              <span className="heading-shadow-text">News Blog</span>
            </span>
            <h2 className="title">Get Every Single Update</h2>
          </div>
          <div className="row justify-content-center latest-blog-posts style-one">
            <div
              className="col-lg-4 col-md-6 col-sm-9 col-11 " data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="latest-post-box mt-30">
                <div className="post-thumb">
                  <img src="assets/img/latest-news/01.jpg" alt="Image" />
                </div>
                <div className="post-content">
                  <a href="#" className="post-date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </a>
                  <h6 className="title">
                    <Link to="/news-details">Standing Out From Crowds mproving Mobile Experience</Link>
                  </h6>
                  <Link to="/news-details" className="post-link">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 col-11 " data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="latest-post-box mt-30">
                <div className="post-thumb">
                  <img src="assets/img/latest-news/02.jpg" alt="Image" />
                </div>
                <div className="post-content">
                  <a href="#" className="post-date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </a>
                  <h6 className="title">
                    <Link to="/news-details">
                        Five Rules Of App Localization China Money Dating And
                        App Store
                      </Link>
                  </h6>
                  <Link to="/news-details" className="post-link">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 col-11 " data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="latest-post-box mt-30">
                <div className="post-thumb">
                  <img src="assets/img/latest-news/03.jpg" alt="Image" />
                </div>
                <div className="post-content">
                  <a href="#" className="post-date">
                    <i className="far fa-calendar-alt" /> 25 February 2021
                  </a>
                  <h6 className="title">
                    <Link to="/news-details">How To Use Underlined Text Improve User Experience</Link>
                  </h6>
                  <Link to="/news-details" className="post-link">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Index;
