import React from "react";
import img1 from '../assets/images/pimg1.jpg';
import img2 from '../assets/images/pimg2.webp';
import img3 from '../assets/images/pimg3.jpg';

import '../assets/styles/Blog.scss';  // Using the new Blog.scss

function Blog() {
    return(
    <div className="blogs-container" id="blogs">
        <h1>Publications</h1>
        <div className="blogs-grid">
            <div className="blog">
                <a href="https://www.mdpi.com/2076-3417/13/8/5113" target="_blank" rel="noreferrer">
                    <img src={img1} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://www.mdpi.com/2076-3417/13/8/5113" target="_blank" rel="noreferrer">
                    <h2>Utilizing Different Machine Learning Techniques to Examine Speeding Violations</h2>
                </a>
                <p>2023-4-20</p>
            </div>

            <div className="blog">
                <a href="https://hrcak.srce.hr/312927" target="_blank" rel="noreferrer">
                    <img src={img2} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://hrcak.srce.hr/312927" target="_blank" rel="noreferrer">
                    <h2>Modelling Driver Behaviour at Urban Signalised Intersections Using Logistic Regression and Machine Learning</h2>
                </a>
                <p>2023-12-20</p>
             </div>

            <div className="blog">
                <a href="https://aclanthology.org/2024.smm4h-1.29/" target="_blank" rel="noreferrer">
                    <img src={img3} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://aclanthology.org/2024.smm4h-1.29/" target="_blank" rel="noreferrer">
                    <h2>UKYNLP@ SMM4H2024: Language Model Methods for Health Entity Tagging and Classification on Social Media (Tasks 4 & 5)</h2>
                </a>
                <p>2024-8</p>
            </div>
        </div>
    </div>
    );
}

export default Blog;
