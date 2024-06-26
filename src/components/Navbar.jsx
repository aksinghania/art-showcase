import React from "react";

import { FaBars } from "react-icons/fa";
import { useState } from "react";
import LogoImg from "../assets/logo.png";
import { PreHeader } from "../pages/Home";

import { Outlet, Link } from "react-router-dom";

function Navbar({ routes = {} }) {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <PreHeader />
      <div className="navbarGridContainer">
        <div className="gridItemImg">
          <img src={LogoImg} />
        </div>

        <div className="gridItemHumbergerIcon">
          <div className="navslide">
            <button
              style={{
                backgroundColor: "white",
                border: "none",
                color: "white",
                marginLeft: "75%",
              }}
            >
              <FaBars
                style={{
                  color: "black",
                  backgroundColor: "white",
                  fontSize: "18px",
                }}
                onClick={({ visible }) => {
                  setShowLinks(!showLinks);
                }}
              />
            </button>

            <div className={`navlinks ${showLinks ? "slideInn" : "slideOutt"}`}>
              {Object.keys(routes).map((val) => (
                <Link key={val} to={routes[val]}>
                  <p>{val}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div id="nav-links">
          {Object.keys(routes).map((val) => (
            <Link key={val} to={routes[val]}>
              {val}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
export default Navbar;
