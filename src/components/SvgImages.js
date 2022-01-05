import React from "react";
import backgroundDesktop from "../images/bg-pattern-desktop.svg";
import boxDesktop from "../images/illustration-box-desktop.svg";
import womanDesktop from "../images/illustration-woman-online-desktop.svg";

export default function SvgImages() {
  return (
    <section>
      <img
        src={backgroundDesktop}
        className="background-pattern"
        alt="bg pattern"
      />
      <img src={boxDesktop} alt="box desktop" className="box-svg" />
      <img src={womanDesktop} alt="woman desktop" className="woman-desktop" />
    </section>
  );
}
