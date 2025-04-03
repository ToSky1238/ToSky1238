import React from "react";

import Header from "../../components/header/header.component";
import Hero from "../../components/hero/hero.component";
import About from "../../components/about/about.component";
import Skills from "../../components/skills/skills.component";
import Projects from "../../components/projects/Projects";
import Contact from "../../components/contact/contact.component";
import Footer from "../../components/footer/footer.component";
import { repos } from "../../editable-stuff/config";

import "./homepage.styles.css";
import ScrollToTop from "react-scroll-to-top";

const Home = (props) => {
  return (
    <div>
      <Header />
      <main className="l_main">
        <Hero />
        <About />
        {repos.show && (
          <Projects
            heading={repos.heading}
            username={repos.gitHubUsername}
            length={repos.reposLength}
            specfic={repos.specificRepos}
          />
        )}
        <Skills />
        <Contact />
      </main>
      <ScrollToTop smooth />
      <Footer />
    </div>
  );
};

export default Home;
