import React from "react";
import image1 from "../assets/image/html5-img.webp";
import image2 from "../assets/image/html-inscription.webp";
function Section() {
  return (
    <div>
      <section>
        <h1 class="portfolio">Portfolio</h1>
        <ul class="benar-2-ul">
          <li>Frontend</li>
        </ul>
        <ul class="benar-2-ul-2">
          <li class="benar-img-li">
            <figcaption class="fig-cap-1">
              <span class="heading">HTML(Hypertext Markup Language)</span>
              <br />
              <span class="heading">
                HTML is a standard markup language used to structure web pages
                and web applications. Its main role is to define content such as
                headings, paragraphs, links, images, tables, and forms. HTML
                elements are defined using tags, each serving a specific
                purpose.
                <br/>
                <a href="https:cisco-web-app.vercel.app">View Project
                </a>
              </span>
              <br />
            </figcaption>
            <img class="benar-2-img" src={image1} alt="" />
          </li>
          <li class="benar-img-li">
            <figcaption class="fig-cap-2">
              <span class="heading-1"></span>
              <br />
              <span class="heading-2">
                I have used HTML in my portfolio and projects to create
                structured layouts, incorporating semantic elements that enhance
                both accessibility and SEO. In addition to HTML, I have also
                combined CSS and JavaScript to improve user experience and
                design.
              </span>
            </figcaption>
            <img class="benar-2-img-2" src={image2} alt="" />
          </li>
         
        </ul>
      </section>
    </div>
  );
}

export default Section;
