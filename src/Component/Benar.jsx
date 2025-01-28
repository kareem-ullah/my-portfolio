import React from "react";
import "../assets/style.css";
import myimg from "../assets/image/kareem.jpg";

function Benar() {
  return (
    <div className="benar">
      <div className="benar-content">
        <div className="benar-img">
          <img className="img" src={myimg} />
        </div>
      </div>
      <div className="benar-text">
        <h3>
          Throughout my career, I have had the opportunity to work across
          various industries, continuously enhancing my skill set and expertise.
          I regularly share updates, projects, and insights on LinkedIn, which
          helps me stay connected with professionals and opportunities
          worldwide. If you’re interested in expanding your network or
          discussing potential professional collaborations, feel free to connect
          with me on LinkedIn.
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
          >
            [https://www.linkedin.com/feed/]
          </a>
        </h3>
      </div>
    </div>
  );
}

export default Benar;
