import React, { useRef } from "react";
import cssClasses from "./Menu.module.scss";
import { Transition } from "react-transition-group";

const transitionStyles = {
  entering: { transform: 'scale(1.2)'},
  entered: {transform: 'scale(1.2)'},
  exiting: {transform: 'scale(0)'},
  exited: { transform: 'scale(0)'}
};
const Menu = (props) => {
    const myref = useRef(null);
    console.log(props)
  return (
    <Transition in={props.show} timeout={300} nodeRef={myref.current} >
      {(state) => <div className={cssClasses.Menu}style={{...transitionStyles[state]}}  ref={myref}>
                             <div className={cssClasses.MenuDiv} style={{...transitionStyles[state]}} >
                             {props.children}
                             </div>
                 </div>}
    </Transition>
  );
};

export default Menu;
