import React from "react";
import Faq from "./components/Faq";
import SvgImages from "./components/SvgImages";
import "./App.css";

export default function App() {
  return (
    <main className="container">
      <div className="flex-container">
        <SvgImages />
        <section className="faq-sec">
          <h1>FAQ</h1>
          <Faq />
        </section>
      </div>
    </main>
  );
}
