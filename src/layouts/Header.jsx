import { Link } from "react-router-dom";
import { useEffect } from "react";
import { stickyNav } from "../utils";
import { Home, News, Pages, Project } from "./menus";
// import SignAction from "../components/SignAction";
import { useAppKitAccount } from "@reown/appkit/react";
import { useAppKit } from "@reown/appkit/react";
import { ProfileDropdown } from "../components/dropdown";
import logo from "../assets/ORIGINAL-LOGO.png";

const Header = ({ transparentTop, transparentHeader, topSecondaryBg }) => {
  const { address, isConnected, caipAddress, status, embeddedWalletInfo } =
    useAppKitAccount();
  const { open, _ } = useAppKit();

  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
  });
  useEffect(() => {
    console.log(
      address,
      isConnected,
      caipAddress,
      status,
      embeddedWalletInfo,
      "--- wallet info"
    );
  }, [address, caipAddress, embeddedWalletInfo, isConnected, status]);
  return (
    <header
      className={`site-header sticky-header d-none d-lg-block ${
        transparentTop ? "topbar-transparent" : ""
      } ${transparentHeader ? "transparent-header" : ""}`}
      id="header-sticky"
    >
      <div className="navbar-wrapper">
        <div className="container">
          <div className="navbar-inner">
            <div className="site-logo">
              <Link to="/">
                <img src={logo} alt="U4C" />
              </Link>
            </div>
            <div className="nav-menu" id="menu">
              <ul>
                {/* // to retain formatting */}
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Explore</Link>
                </li>
                <li>
                  <Link to="/">AbOut Us</Link>
                </li>

                <li>
                  <Link to="/">Cash vs Crypto</Link>
                </li>
              </ul>
            </div>
            <div className="navbar-extra d-flex align-items-center">
              {/*  */}
              {/* {!isConnected ? (
                // <SignAction />
              ) : ( */}
              {/* <Link
                to="/signup"
                className="main-btn nav-btn d-none d-sm-inline-block"
              >
                Sign up <i className="far fa-arrow-right" />
              </Link> */}
              {/* )} */}
              <ProfileDropdown />
              <div>
                {/* 
                {isConnected ? (
                  <ProfileDropdown />
                ) : status === "connecting" || status === "reconnecting" ? (
                  <span className="main-btn nav-btn d-none d-sm-inline-block opacity-50 cursor-not-allowed">
                    Connecting...
                  </span>
                ) : (
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      open({ view: "Connect" });
                    }}
                    className="main-btn nav-btn d-none d-sm-inline-block"
                  >
                    Connect Wallet <i className="far fa-arrow-right" />
                  </span>
                )} */}

                <a href="#" className="nav-toggler">
                  <span />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
