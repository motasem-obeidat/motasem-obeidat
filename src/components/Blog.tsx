import React from "react";
import img1 from '../assets/images/postgresql.png';
import '../assets/styles/Blog.scss';  // Using the new Blog.scss

function Blog() {
    return(
    <div className="blogs-container" id="blogs">
        <h1>Personal Blogs</h1>
        <div className="blogs-grid">
            <div className="blog">
                <a href="https://github.com/motasem-obeidat/CS505-PostgreSQL-Blog" target="_blank" rel="noreferrer">
                    <img src={img1} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://github.com/motasem-obeidat/CS505-PostgreSQL-Blog" target="_blank" rel="noreferrer">
                    <h2>PostgreSQL Benchmarking</h2>
                </a>
                <p>Focus on evaluating PostgreSQL's performance using the TPC-H benchmark.</p>
            </div>
        </div>
    </div>
    );
}

export default Blog;
