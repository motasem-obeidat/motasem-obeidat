import React from "react";
import img1 from '../assets/images/postgresql.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects & Blogs</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/motasem-obeidat/CS505-PostgreSQL-Project" target="_blank" rel="noreferrer"><img src={img1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/motasem-obeidat/CS505-PostgreSQL-Project" target="_blank" rel="noreferrer"><h2>PostgreSQL Benchmarking</h2></a>
                <p>Focus on evaluating PostgreSQL's performance using the TPC-H benchmark.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
