import React from "react";
import img1 from '../assets/images/postgresql.png';
import '../assets/styles/Blogs.scss';

function Blogs() {
    return(
    <div className="blogs-container" id="blogs">
        <h1>Blogs</h1>
        <div className="blogs-grid">
            <div className="blogs">
                <a href="https://github.com/motasem-obeidat/CS505-PostgreSQL-Project" target="_blank" rel="noreferrer"><img src={img1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/motasem-obeidat/CS505-PostgreSQL-Project" target="_blank" rel="noreferrer"><h2>PostgreSQL Benchmarking</h2></a>
                <p>Focus on evaluating PostgreSQL's performance using the TPC-H benchmark.</p>
            </div>
        </div>
    </div>
    );
}

export default Blogs;
