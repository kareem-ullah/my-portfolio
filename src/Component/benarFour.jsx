import React from "react";
import reactimg from "../assets/image/react-3.png";

function BenarFour() {
  return (
    <div>
      <section>
        <h1 class="heading-h1">Education</h1>
        <ul class="benar-4-ul-1">
          <li class="benar-4-img-li">
            <figcaption class="benar-4-fig-1">
              <span class="benar-text-5">
                Software Engineer
                <br /> Karachi
              </span>
              <br />
              <figcaption class="benar-4-fig-2">
                <span>
                  FORNTEND DEVELOPER
                  <br />
                  Html | Css | javascript | React 
                </span>
              </figcaption>
            </figcaption>
            <img class="benar-4-img" src={reactimg} alt="" />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default BenarFour;
