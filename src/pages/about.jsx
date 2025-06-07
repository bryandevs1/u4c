import { Link } from "react-router-dom";
import { useState } from "react";
import Slider from "react-slick";
import Counter from "../components/Counter";
import PageBanner from "../components//PageBanner";
import VideoPopup from "../components//VideoPopup";
import Layout from "../layouts/Layout";
import { teamSlider } from "../sliderProps";
import img1 from "../assets/img/U4C4.png";
import img2 from "../assets/img/U4C3.png";
import img3 from "../assets/img/U4C2.png";

const About = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      <PageBanner pageName="About Us" />
      <section className="about-section-three section-gap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-5 col-lg-7 col-md-9 col-sm-10">
              <div className="about-text mb-lg-50">
                <div className="common-heading mb-30">
                  <span className="tagline">
                    <i className="fas fa-plus" /> Who We Are
                    <span className="heading-shadow-text">About Us</span>
                  </span>
                  <h2 className="title">
                    We Unite People with Purpose and Passion
                  </h2>
                </div>
                <p>
                  Driven by kindness, strengthened by community, and powered by
                  you.
                </p>
                <ul className="check-list mt-30">
                  <li data-aos="fade-up" data-aos-delay="0">
                    <h5 className="title">
                      United in Purpose, Driven by Impact
                    </h5>
                    <p>
                      We’re more than a movement — we’re a mission. U4C empowers
                      change through creative action and community-driven
                      solutions that make a real difference.
                    </p>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="100">
                    <h5 className="title">Powered by Your Generosity</h5>
                    <p>
                      Thanks to your support, we’re able to raise awareness,
                      fund life-changing projects, and build pathways to a
                      better future — one contribution at a time.
                    </p>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="200">
                    <h5 className="title">
                      Be a Voice for Change with #United4Change
                    </h5>
                    <p>
                      Join a global community united by compassion. Spread the
                      word, share your story, and inspire impact with
                      #United4Change.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div className="about-gallery " data-aos="fade-right">
                <div className="img-one">
                  <img src={img1} alt="Image" />
                </div>
                {/* <div className="img-two " data-aos="fade-up">
                  <img src={img2} alt="Image" />
                </div> */}
                {/* <div className="pattern">
                  <img
                    src={img3}
                    alt="Pattern"
                  /> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== About Section End ======*/}
      {/*====== Feature Section Start ======*/}
      <section className="feature-section primary-soft-bg section-gap">
        <div className="container">
          <div className="common-heading text-center mb-30">
            <span className="tagline">
              <i className="fas fa-plus" /> What We Do
              <span className="heading-shadow-text">Values</span>
            </span>
            <h2 className="title">Our Mission</h2>
            <p className="clik">
              Our mission at United4Change goes beyond fashion or merch; it’s a
              call to action, a promise to empower everyone, transforming lives
              in the face of adversity. We are dedicated to bringing hope and
              support to resilient communities by providing essential resources
              in the realms of health, education, and living essentials
            </p>
            <h2 className="title">Our Core Values</h2>
          </div>
          <div className="row icon-boxes justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-9 "
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon-box mt-30">
                <div className="icon">
                  <i className="flaticon-debit-card" />
                </div>
                <h5 className="title">Empowerment Through Choice</h5>
                <p>
                  We are committed to empowering individuals who understand the
                  needs of the community to make a difference through.
                </p>

                <span className="box-index">01</span>
                <div className="box-img"></div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon-box mt-30">
                <div className="icon">
                  <i className="flaticon-payment" />
                </div>
                <h5 className="title">Collaboration</h5>
                <p>
                  Collaboration is at the heart of our approach to ensure
                  impactful, grassroots-level change. We understand that
                  collective challenges demand a united front.
                </p>

                <span className="box-index">02</span>
                <div className="box-img"></div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 "
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon-box mt-30">
                <div className="icon">
                  <i className="flaticon-wallet-1" />
                </div>
                <h5 className="title">Transparency and Inclusivity</h5>
                <p>
                  Building a global community that operates on integrity, we
                  maintain open communication and an inclusive environment.
                </p>

                <span className="box-index">03</span>
                <div className="box-img"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Feature Section End ======*/}

      {/*====== Counter With Image Text Block Start ======*/}
      <section className="counter-with-video">
        <div className="video-area">
          <div className="container">
            <div className="funden-video">
              <img src={img3} alt="Image" />
            </div>
          </div>
        </div>
        <div className="counter-boxes-area secondary-bg">
          <div className="container">
            <div className="row counter-boxes justify-content-lg-between justify-content-center">
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <i className="flaticon-crowdfunding" />
                  </div>
                  <div className="content white-color">
                    <div className="count-wrap">
                      <span className="suffix">Global</span>
                    </div>
                    <p>
                      Benefit charitable <br />
                      organizations worldwide{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <i className="flaticon-ecological" />
                  </div>
                  <div className="content white-color">
                    <div className="count-wrap">
                      <span className="suffix">Mission</span>
                    </div>
                    <p>
                      Revolutionize global philanthropy
                      <br />
                      through technology.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <i className="flaticon-badges" />
                  </div>
                  <div className="content white-color">
                    <div className="count-wrap">
                      <span className="suffix">Innovate</span>
                    </div>
                    <p>
                      Bitcoin and <br />
                      Blockchain Technology{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-auto col-lg-3 col-md-6 col-sm-8">
                <div className="counter-box mb-60">
                  <div className="icon">
                    <i className="flaticon-support" />
                  </div>
                  <div className="content white-color">
                    <div className="count-wrap">
                      <span className="suffix">Transparency</span>
                    </div>
                    <p>
                      Provide transparency and <br />
                      accountability to donors{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Counter With Image Text Block End ======*/}

      {/*====== Partners Section With CTA Start ======*/}
      <section className="partners-section">
        <div className="container">
          <div className="partners-logos partners-section-padding section-border-top"></div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
