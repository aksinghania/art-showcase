import React from "react";

import { FaBars } from "react-icons/fa";
import { useState } from "react";
import LogoImg from "../assets/logo.png";
import { PreHeader } from "../pages/Home";

function Navbar() {
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
              <a href={"./"}>
                <p> HOME</p>
              </a>
              <a href={"./Gallery1"}>
                <p> GALLERY</p>
              </a>
              <a href={"./Testimonial"}>
                <p>TESTIMONIAL</p>
              </a>
              <a href={"./Courses"}>
                <p>COURSES</p>
              </a>
            </div>
          </div>
        </div>
        <div id="nav-links">
          <a href={"./"}>HOME</a>
          <a href={"./Gallery1"}> GALLERY</a>
          <a href={"./Testimonial"}> TESTIMONIAL</a>
          <a href={"./Courses"}> COURSES</a>
        </div>
      </div>
    </>
  );
}
export default Navbar;
