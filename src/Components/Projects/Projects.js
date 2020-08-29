import React from "react";
import Cards from "../Cards/Cards";
import cssClasses from "./Projects.module.scss";

const Projects = (props) => {
  return (
    <div className={cssClasses.Container}>
    <div className={cssClasses.Header}></div>
      <h1 className={cssClasses.Heading}>My Work</h1>
      <div className={cssClasses.Content}>
        <Cards></Cards>
      </div>
    </div>
  );
};

export default Projects;
