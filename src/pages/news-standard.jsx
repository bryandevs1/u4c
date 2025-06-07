import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PageBanner from "../components//PageBanner";
import VideoPopup from "../components//VideoPopup";
import Layout from "../layouts/Layout";
import { getPagination, pagination } from "../utils";
import img from "../assets/img/gik.jpg";

const NewsStandard = () => {
  const [video, setVideo] = useState(false);
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".post-item", sort, active);
    let list = document.querySelectorAll(".post-item");
    setstate(getPagination(list.length, sort));
  }, [active]);
  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      <PageBanner pageName="Cash vs Crypto" />
      <section className="blog-area section-gap-extra-bottom primary-soft-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-post-loop">
                <div className="post-item video-post">
                  <div className="post-thumbnail">
                    <img src={img} alt="Thumbnail" />
                    <a
                      href="#"
                      className="video-popup"
                      onClick={() => setVideo(true)}
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <div className="post-content">
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <i className="far fa-user-circle" />
                          United 4 Change
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" />5 June 2025
                        </a>
                      </li>
                    </ul>
                    <h3 className="text-smm">
                      <Link to="/news-details">
                        United 4 Change is a game-changing donation platform for
                        nonprofits that provides transparency and accountability
                        to donors by sharing financial information and direct
                        project results in real-time. We understood the impact
                        blockchain technology could have on many of the pain
                        points nonprofits often suffer: lower costs in fees,
                        faster transaction times, precise tracking of donor
                        funds from beginning to end, and removal of misuse of
                        funds.
                      </Link>
                    </h3>
                    <Link to="/cvp-details" className="post-link">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsStandard;
