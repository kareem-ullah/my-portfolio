import React from "react";
import react from "../assets/image/react-3.png";
import react2 from "../assets/image/logo-html-5-css-javascript.png";

function BenarSection() {
  return (
    <div>
      <section>
        <ul class="benar-2-ul-2">
          <li class="benar-food">
            <span class="food">
              "As a passionate web developer, I strive to deliver innovative
              solutions and creative designs for every project. My goal is to
              help businesses build a unique online presence that stands out in
              the digital world. If you're looking to create a modern,
              user-friendly website, I'm here to bring your vision to life.
              Check out my complete portfolio by clicking the link below."
              Portfolio Link
              <br />
              <a
                href="https:food-web-chi-pied.vercel.app
"
                target="_blank"
                rel="noopener noreferrer"
              >
                [My-Food-Web]
              </a>
            </span>
          </li>
          <li class="benar-img-li">
            <figcaption class="fig-cap-2">
              <span class="heading-1">React</span>
              <br />
              <span>
                React is a popular JavaScript library used for building dynamic
                and interactive user interfaces, particularly for single-page
                applications. It allows developers to create reusable UI
                components that efficiently update and render when data changes.
                React,s virtual DOM optimizes performance by minimizing the
                number of direct interactions with the actual DOM.
              </span>
            </figcaption>
            <img class="benar-2-img-2" src={react} alt="" />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default BenarSection;
