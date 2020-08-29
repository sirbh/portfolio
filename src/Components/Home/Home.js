import React from "react";
import cssClasses from "./Home.module.scss";
import Typical from 'react-typical'
import Button from  '../Button/Button'

const Home = (props) => {
  const clickHandler=()=>
  {
    props.history.push("/Projects");
  }
  return (
    <div className={cssClasses.Container}>
      <h1>
        I am Saurabh the 
        <Typical
        steps={[' Web Designer', 2000, ' Java Developer', 2000," Electronics Engineer",2000]}
        loop={Infinity}
        wrapper="span"
      />
       
      </h1>
      <p>I specialize in Front-End Development with ReactJS</p>
      <Button clicked={clickHandler} width={150} height={50} btnName="View My Work"></Button>
    </div>
  );
};

export default Home;
