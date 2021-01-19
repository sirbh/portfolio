import React from "react";
import cssClasses from "./About.module.scss";
import { Doughnut } from "react-chartjs-2";

const About = () => {
  return (
    <div className={cssClasses.Container}>
      <div className={cssClasses.Header}></div>
      <div className={cssClasses.content}>
        <h1>About Me</h1>
        <div className={cssClasses.Discription}>
          <div>
            <h1>Education</h1>
            <div>
              <h3>Guru Gobind Singh Indraprasth University</h3>
              <p>Electronic and Commmunication Engineering</p>
              <p>2013-2017</p>
              <h3>New Green Field School</h3>
              <p>12th PCM</p>
              <p>2012</p>
              <h3>New Green Field School</h3>
              <p>10th</p>
              <p>2010</p>
            </div>
          </div>
          <div>
            <h1>Skills</h1>
            <div>
              {/* <h3>React Js <span></span><span></span></h3>
              <h3>Javascript</h3>
              <h3>HTML 5</h3>
              <h3>CSS 3</h3>
              <h3>Sass</h3>
              <h3>TypeScript</h3>
              <h3>Angular 8</h3>
              <h3>Java 8</h3>
              <h3>Embedded System Programming</h3>
              <h3>Spring Boot</h3>
              <h3>Databases</h3> */}
              <h3>FrontEnd</h3>
              <p>Angular 8</p>
              <p>React JS</p>
              <p>HTML5/CSS/SCSS/Bootstrap</p>
              <h3>BackEnd</h3>
              <p>Node JS</p>
              <p>Express JS</p>
              <p>Payment Integration</p>
              <p>Java 8</p>
              <p>Spring Boot</p>
              <h3>Databases</h3>
              <p>Mongo DB(Mongoose)</p>
              <p>My SQL(sequelize)</p>
            </div>
          </div>
          <div>
            <h1>Experience</h1>
            <div>
              <h3>Libsys</h3>
              <p>UI Developer</p>
              <p>Jan-2020 --- June-2020</p>
              <h3>Authbridge</h3>
              <p>Java Developer</p>
              <p>Sept-2018 --- Aug-2019</p>
              <h3>Global Educon</h3>
              <p>Software Trainee</p>
              <p>Jan-2016 --- Aug-2018</p>
            </div>
          </div>
          <div>
            <h1>Time Chart</h1>
            <div>
              <h3>This is how I spend my Time</h3>
              <Doughnut
                data={{
                  labels: [
                    "Programming",
                    "Family-Friends",
                    "Learning-New-Technology",
                    "Cooking",
                    "Sport",
                  ],
                  datasets: [
                    {
                      data: [35,10,20,10,10],
                      backgroundColor: [
                        "#a93226",
                        "#76448a",
                        "#2e86a1",
                        "#117a65",
                        "#784212",
                      ],
                    },
                  ],
                }}
                width={50}
                height={50}
              ></Doughnut>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
