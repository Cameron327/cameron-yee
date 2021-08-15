import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer.js";
// tailwind just knows to get it from the index.css file without importing it?
// import "../index.css";
import resume from "../files/resume.pdf";

function Home() {
  return (
    <div>
      <main className="homePage">
        <section className="section">
          <h1>
            Hello! My name is{" "}
            <strong>
              <span className="name">Cameron</span>
            </strong>
            .
          </h1>
          <h2>
            I'm a Full Stack Developer and a Computer Science major at{" "}
            <a
              href="https://www.ucdavis.edu/"
              target="_blank"
              rel="noreferrer"
              className="hover-scarlett"
            >
              UCD
            </a>
            .
          </h2>
          <h3>
            Check out the{" "}
            <NavLink to="/project">
              <span className="hover-scarlett">Projects</span>
            </NavLink>{" "}
            tab to see some of my work or the{" "}
            <NavLink to="/about">
              <span className="hover-scarlett">About</span>
            </NavLink>{" "}
            tab to learn more about me!
          </h3>
          <h4>
            For an overview, check out my{" "}
            <a href={resume} target="_blank" rel="noreferrer">
              <span className="hover-scarlett">resume</span>
            </a>
            .
          </h4>
          <a href={resume} target="_blank" rel="noreferrer">
            <button>Resume</button>
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
