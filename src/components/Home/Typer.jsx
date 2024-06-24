import React from "react";
import { ReactTyped as Typed } from "react-typed";

function Typer({ text = [] }) {
  return (
    <>
      <div className="typerContainer">
        <div className="typerContainerText">
          <h2>Announcement</h2>
        </div>

        <div className="type">
          <Typed strings={text} typeSpeed={100} backSpeed={5} loop />
        </div>
      </div>
    </>
  );
}
export default Typer;
