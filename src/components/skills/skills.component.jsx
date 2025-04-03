import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import sr from "../../utils/scrollReveal";
import "./skills.styles.css";

const Skills = (props) => {
  useEffect(() => {
    sr.reveal(".skills__subtitle", {});
    sr.reveal(".skills__text", {});
    sr.reveal(".skills__data", { interval: 100 });
    sr.reveal(".skills__img", { delay: 400 });
  });

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills__container bd-grid">
        <div className="skills__frontend">
          <h2 className="skills__subtitle">Front End</h2>
          <p className="skills__text">
            I have been using JavaScript and its libraries, frameworks{" "}
            <strong>React, Next.js, Vue.js, Nuxt.js, Gatsby.js Tailwind CSS, styled-components, Chakra UI, Shadcn UI</strong> and{" "}
            <strong> Twin.Macro.</strong>
          </p>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-react skills__icon"></i>
              <span className="skills__name">REACT</span>
            </div>

            <div className="skills__bar skills__react"></div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <Icon icon="teenyicons:nextjs-outline" className="skills__icon" />
              <span className="skills__name">NEXTJS</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <Icon icon="bxl:vuejs" className="skills__icon" />
              <span className="skills__name">VueJS</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <Icon icon="teenyicons:nextjs-outline" className="skills__icon" />
              <span className="skills__name">Nuxt.js</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <Icon icon="bxl:redux" className="skills__icon" />
              <span className="skills__name">REDUX</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <Icon icon="teenyicons:html5-outline" className="skills__icon" />
              <span className="skills__name">HTML</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <Icon icon="teenyicons:tailwind-solid" className="skills__icon" />
              <span className="skills__name">Stylec-components, Chakra UI, Shadcn UI</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <Icon
                icon="teenyicons:tailwind-outline"
                className="skills__icon"
              />
              <span className="skills__name">TWIN.MACRO</span>
            </div>
          </div>
        </div>
        <div className="skills__backend">
          <h2 className="skills__subtitle">Back End</h2>
          <p className="skills__text">
            I developed the projects during my studying by using{" "}
            <strong>Node.js, ExpressJS framework, MongoDB, Python, Django, Flask, FastAPI</strong> and{" "}
            <strong>MySQL tools.</strong>
          </p>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bx-data skills__icon"></i>
              <span className="skills__name">MYSQL</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bx-data skills__icon"></i>
              <span className="skills__name">MONGODB</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-nodejs skills__icon"></i>
              <span className="skills__name">NODEJS</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-nodejs skills__icon"></i>
              <span className="skills__name">EXPRESSJS</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-python skills__icon"></i>
              <span className="skills__name">PYTHON</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-python skills__icon"></i>
              <span className="skills__name">Django</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-python skills__icon"></i>
              <span className="skills__name">Flask</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-python skills__icon"></i>
              <span className="skills__name">AI Implementation</span>
            </div>
          </div>
        </div>
        <div className="skills__others">
          <h2 className="skills__subtitle">Other</h2>
          <p className="skills__text">
            Proficient using <strong>GitHub</strong>,<strong>Team work</strong>for my collaborating with
            the teams.
          </p>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-github skills__icon"></i>
              <span className="skills__name">GITHUB</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-github skills__icon"></i>
              <span className="skills__name">Team Management</span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-github skills__icon"></i>
              <span className="skills__name">Git Version Control</span>
            </div>
          </div>
        </div>
        <div className="skills__others">
          <h2 className="skills__subtitle">Having Good</h2>
          <p className="skills__text">
            A passionate <strong>Work</strong> for my collaborating with
            the teams.
          </p>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-github skills__icon"></i>
              <span className="skills__name">UI/UX experience</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-github skills__icon"></i>
              <span className="skills__name">Analyze/Smart Code</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-github skills__icon"></i>
              <span className="skills__name">Framer Motion</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-github skills__icon"></i>
              <span className="skills__name">Pixel perfect from Figma</span>
            </div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="bx bxl-github skills__icon"></i>
              <span className="skills__name">Quick debugging and solving problem skills</span>
            </div>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default Skills;
