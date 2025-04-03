import React, { useEffect } from 'react';

import sr from '../../utils/scrollReveal';
import Project1 from '../../assets/projects/project.png';
import './projects.styles.css';

const Projects = props => {

    useEffect(() => {
        sr.reveal('.work__img',{interval: 200}); 
    });

    return (
        <section className="work section" id="work">
            <h2 className="section-title">Pet Projects</h2>
            <div className="work__container bd-grid">
                <div className="work__img"><img src={Project1} alt="project1" /></div>
                <div className="work__img"><img src={Project1} alt="project1" /></div>
                <div className="work__img"><img src={Project1} alt="project1" /></div>
                <div className="work__img"><img src={Project1} alt="project1" /></div>
            </div>
        </section>
    )
}

export default Projects;