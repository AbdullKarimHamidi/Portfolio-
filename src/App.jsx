import React from "react";
import Navabr from "./components/Navbar/Navabr";
import Baner from "./components/Baner/Baner";
import Features from "./components/Features/Features";
import Project from "./components/Projects/Project";
import Resum from "./components/Resum/Resum";
import Testonial from "./components/testimonial/Testonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="max-w-full h-auto bg-bodyColor text-lighttext">
      <Navabr />
      <div className="data max-w-screen-2xl mx-auto ">
        <Baner />
        <Features />
        <Project />
        <Resum />
        <Testonial />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
