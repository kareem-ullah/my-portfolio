import React from "react";
import react from "../assets/image/react-3.png";
import react2 from "../assets/image/logo-html-5-css-javascript.png";

function BenarSection() {
  return (
    <div className="section">
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
          <img class="react-img" src={react} alt="" />
        </ul>
      </section>
    </div>
  );
}

export default BenarSection;
