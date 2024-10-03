import React from "react";
import img1 from '../assets/images/postgresql.png';
import '../assets/styles/Blog.scss';  // Using the new Blog.scss

function Blog() {
    return(
    <div className="blogs-container" id="blogs">
        <h1>Publications</h1>
        <div className="blogs-grid">
            <div className="blog">
                <a href="https://github.com/motasem-obeidat/CS505-PostgreSQL-Blog" target="_blank" rel="noreferrer">
                    <img src={img1} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://github.com/motasem-obeidat/CS505-PostgreSQL-Blog" target="_blank" rel="noreferrer">
                    <h2>Utilizing Different Machine Learning Techniques to Examine Speeding Violations</h2>
                </a>
                <p>This study investigated the potential impacts on speeding violations in the United States, including the top ten states in terms of crashes: California, Florida, Georgia, Illinois, Michigan, North Carolina, Ohio, Pennsylvania, Tennessee, and Texas. Several variables connected to the driver, surroundings, vehicle, road, and weather were investigated. Three different machine learning algorithms—Random Forest (RF), Classification and Regression Tree (CART), and Multi-Layer Perceptron (MLP)—were applied to predict speeding violations. Accuracy, F-measure, Kappa statistic, Root Mean Squared Error (RMSE), Area Under Curve (AUC), and Receiver Operating Characteristic (ROC) were used to evaluate the algorithms’ performance. Findings showed that age, accident year, road alignment, weather, accident time, and speed limits are the most significant variables. The algorithms used showed excellent ability in analyzing and predicting speeding violations. The RF was the best method for analyzing and predicting speeding violations. Understanding how these factors affect speeding violations helps decision-makers devise ways to cut down on these violations and make the roads safer.</p>
            </div>

            <div className="blog">
                <a href="https://github.com/motasem-obeidat/CS505-PostgreSQL-Blog" target="_blank" rel="noreferrer">
                    <img src={img1} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://github.com/motasem-obeidat/CS505-PostgreSQL-Blog" target="_blank" rel="noreferrer">
                    <h2>Modelling Driver Behaviour at Urban Signalised Intersections Using Logistic Regression and Machine Learning</h2>
                </a>
                <p>This study investigated several factors that may influence driver actions throughout the yellow interval at urban signalised intersections. The selected samples include 2,168 observations. Almost 33% of drivers stopped ahead of the stop line, 60% passed the intersection through the yellow interval, and 7% passed after the yellow interval was complete (red light running, RLR violations). Binary logistic regression models showed that the chance of passing went up as vehicle speed went up and down as the gap between the vehicle and the traffic light and green interval went up. The movement type and vehicle position influenced the passing probability, but the vehicle type did not. Moreover, multinomial logistic regression models showed that the legal passing probability declined with the growth in the green time and vehicle distance to the traffic signal. It also increased with the growth in the speed of approaching vehicles. Also, movement type directly affected the chance of legally passing, but vehicle position and type did not. Furthermore, the driver’s performance during the yellow phase was studied using the k-nearest neighbours algorithm (KNN), support vector machines (SVM), random forest (RF) and AdaBoost machine learning techniques. The driver’s action run prediction was the most accurate, and the run-on-red camera was the least accurate.</p>
            </div>

            <div className="blog">
                <a href="https://github.com/motasem-obeidat/CS505-PostgreSQL-Blog" target="_blank" rel="noreferrer">
                    <img src={img1} className="zoom" alt="thumbnail" width="100%"/>
                </a>
                <a href="https://github.com/motasem-obeidat/CS505-PostgreSQL-Blog" target="_blank" rel="noreferrer">
                    <h2>UKYNLP@ SMM4H2024: Language Model Methods for Health Entity Tagging and Classification on Social Media (Tasks 4 & 5)</h2>
                </a>
                <p>We describe the methods and results of our submission to the 9th Social Media Mining for Health Research and Applications (SMM4H) 2024 shared tasks 4 and 5. Task 4 involved extracting the clinical and social impacts of non-medical substance use and task 5 focused on the binary classification of tweets reporting children’s medical disorders. We employed encoder language models and their ensembles, achieving the top score on task 4 and a high score for task 5.</p>
            </div>
        </div>
    </div>
    );
}

export default Blog;
