import React from "react";
import react2 from "../assets/image/react-2.png";

function BenarFive() {
  return (
    <div>
      <section>
        <ul class="benar-5-ul-1">
          <li class="benar-5-img-li-1"></li>

          <li class="benar-5-img-li-2">
            <figcaption class="benar-5-fig-1">
              <br />
              <figcaption class="benar-5-fig-2">
                <span>
                  Frontend Engineer
                  <br />
                  javascript | React | Nodejs
                </span>
              </figcaption>
            </figcaption>
            <img class="benar-5-img-2" src={react2} alt="" />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default BenarFive;
