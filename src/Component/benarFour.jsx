import React from "react";
import reactimg from "../assets/image/react-3.png";

function BenarFour() {
  return (
    <div>
      <section>
        <h1 class="heading-h1"></h1>
        <ul class="benar-4-ul-1">
        <img class="benar-4-img" src={reactimg} alt="" />
          <li class="benar-4-img-li">
            <figcaption class="benar-4-fig-1">
              <span class="benar-text-5">
                Software Engineer
                <br />
              </span>
              <br />
              <figcaption>
                <span class="benar-4-fig-2">
                  FORNTEND DEVELOPER
                  <br />
                  Html | Css | javascript | React | Bootstrap | Material-UI | Github | Figma  
                </span>
              </figcaption>
            </figcaption>
            
          </li>
          
        </ul>
      </section>
    </div>
  );
}

export default BenarFour;
