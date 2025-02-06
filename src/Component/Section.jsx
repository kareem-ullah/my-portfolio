import React from "react";
import image1 from "../assets/image/html5-img.webp";
import image2 from "../assets/image/html-inscription.webp";
function Section() {
  return (
    <div className="section">
      <section>
        <ul class="benar-2-ul-2">
        <img class="benar-2-img-2" src={image2} alt="" />
         
            <figcaption class="fig-cap-1">
              <span class="heading">
              HTML(Hypertext Markup Language)
              <br />
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
        </ul>
      </section>
    </div>
  );
}

export default Section;
