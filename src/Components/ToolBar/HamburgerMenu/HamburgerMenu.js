import React from "react";
import cssClasses from "./HamburgerMenu.module.scss";

const HamburgerMenu = (props) => {
  const classes = [cssClasses.Hamburger];
  if (props.show) {
    classes.push(cssClasses.active);
  }
  return (
    <div className={classes.join(' ')} onClick={props.clicked}>
      <div className={cssClasses.Cen}></div>
    </div>
  );
};

export default HamburgerMenu;
