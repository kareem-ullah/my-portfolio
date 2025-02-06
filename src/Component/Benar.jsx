import React from "react";
import "../assets/style.css";
import myimg from "../assets/image/kareem.jpg";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

function Benar() {
  return (
    <div className="benar">
      <div className="benar-text">
        <span>
          HAFIZ
          <br />
          MUHAMMAD
          <br />
          KAREEM ULLAH
        </span>
        <h3 className="web">Web Developer & Designer</h3>

        <button
          className="btn"
          onClick={() =>
            window.open("https://mycv-kohl-ten.vercel.app", "_blank")
          }
        >
          Download CV
        </button>

        <div className="benar-social">
          <figure>
            <a
              href="https://github.com/kareem-ullah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
          </figure>

          <figure>
            <a
              href="https://www.linkedin.com/in/muhammad-kareemullah-0a1a55301/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin className="social-icon"/>
            </a>
          </figure>
          <figure>
            <CiFacebook className="social-icon"/>
          </figure>
        </div>
      </div>

      <div className="benar-content">
        <div className="benar-img">
          <img className="img" src={myimg} />
        </div>
      </div>
    </div>
  );
}

export default Benar;

// <div className="benar-text">

//           <a
//             href="https://www.linkedin.com/feed/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             [https://www.linkedin.com/feed/]
//           </a>
//       </div>
