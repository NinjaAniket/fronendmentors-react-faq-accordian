import React from "react";
import { data } from "../assets/dummy-data";
import Question from "./Question";

export default function Faq() {
  return (
    <div>
      {data.map((item) => (
        <Question {...{ item }} key={item.id} />
      ))}
    </div>
  );
}
