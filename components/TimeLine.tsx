import React from "react";

const TimeLine = () => {
  return (
    <div>
      <h1 className="timeline-title">My Journey</h1>
      <div className="wrapper">
        <div className="center-line">
          <a href="#" className="scroll-icon">
            <i className="fas fa-caret-up"></i>
          </a>
        </div>
        <div className="row row-1">
          <section>
            <i className="icon fas fa-home"></i>
            <div className="details">
              <span className="title"></span>
              <span>2020</span>
            </div>
            <p>
              Joined Kongu Engineering College to persue Computer Science
              Engineering.
            </p>
          </section>
        </div>
        <div className="row row-2">
          <section>
            <i className="icon fas fa-star"></i>
            <div className="details">
              <span className="title"></span>
              <span>...</span>
            </div>
            <p>
              Apart from my academic endeavors, I am actively involved in
              learning programming and exploring various frameworks.
              Additionally, I have joined extracurricular activities and devoted
              time to working on personal projects.
            </p>
          </section>
        </div>
        <div className="row row-1">
          <section>
            <i className="icon fas fa-rocket"></i>
            <div className="details">
              <span className="title"></span>
              <span>
                2022 <span className="timeline-month">Mar-Nov</span>
              </span>
            </div>
            <p>
              I joined Nilam (Freelance Project) for the Erode Collectorate and
              began creating a web application. In this project, I worked with
              React, TypeScript, and SCSS to build the app.
            </p>
          </section>
        </div>
        <div className="row row-2">
          <section>
            <i className="icon fas fa-globe"></i>
            <div className="details">
              <span className="title"></span>
              <span>
                2022 <span className="timeline-month">Aug-Feb(2023)</span>
              </span>
            </div>
            <p>
              I joined Rooster Technologies, where my responsibilities include
              building the database schema and managing the frontend
              development. For the frontend, I am utilizing React Redux Toolkit,
              along with SQL for the database and Node.js for the backend.
            </p>
          </section>
        </div>
        <div className="row row-1">
          <section>
            <i className="icon fas fa-paper-plane"></i>
            <div className="details">
              <span className="title"></span>
              <span>...</span>
            </div>
            <p>
              I have begun my preparations for placements, focusing on enhancing
              my skills and knowledge.
            </p>
          </section>
        </div>
        <div className="row row-2">
          <section>
            <i className="icon fas fa-globe"></i>
            <div className="details">
              <span className="title"></span>
              <span>
                2023 <span className="timeline-month">Sep - Till date</span>
              </span>
            </div>
            <p>
            I have joined Software AG as an R&D intern, and my role is focused on DevOps. I use Docker, Kubernetes (K8s), Helm, AWS, and Azure for deploying services.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
