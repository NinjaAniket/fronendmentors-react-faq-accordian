import React, { useState } from "react";
import IconArrowDown from "../images/icon-arrow-down.svg";
import "../App.css";

export default function Question({ item: { ques, ans } }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="questions">
        {show ? (
          <p className="p-questions" style={{ fontWeight: "bold" }}>
            {ques}
          </p>
        ) : (
          <p className="p-questions">{ques}</p>
        )}
        <button type="button" className="btn" onClick={() => setShow(!show)}>
          {show ? (
            <img src={IconArrowDown} alt="arrow up" />
          ) : (
            <img src={IconArrowDown} alt="arrow down" />
          )}
        </button>
        {show && <p className="p-ans">{ans}</p>}
      </div>
      <hr />
    </>
  );
}
