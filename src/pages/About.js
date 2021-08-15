import React from "react";
import Footer from "../components/Footer.js"

function About() {
  return (
    <div>
      <main className="aboutPage">
        <section className="section">
          <div className="aboutCard">
            <strong>
              <h2 className="header">About Me</h2>
            </strong>
            <p className="description">
              Hi There! I'm Cameron currently a Junior at UCD working towards a
              B.S. degree in Computer Science. In my most recent work
              experience, I worked for Oneboard.live as a front-end and back-end
              engineer, mainly using JavaScript, React.JS, and Google Firebase.
              Other than school and professional work, I like to learn new
              skills and put them into practice by completing my own projects.
              In my free time, I like to volunteer or watch movies and TV shows.
            </p>
          </div>
        </section>
        <div className="divider"></div>
        <section className="section">
          <div className="aboutCard">
            <strong>
              <h2 className="header">Skills</h2>
            </strong>
            <p className="skills">Python · JavaScript · C++ · C · HTML · CSS</p>
            <p className="skills">
              Google Firebase · Tailwind CSS · Node.js · React.js · Git · jQuery
              · Express.js · MongoDB · VIM · Unix · AJAX · axios.js ·
              object-orented programming · data structures · algorithm analysis
              · web-development
            </p>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default About;
