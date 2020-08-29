import React from 'react'
import  cssClasses from "./NavItem.module.scss"
import {NavLink} from "react-router-dom"

const NavItem = (props)=>
{
return <NavLink exact className={cssClasses.NavItem} activeClassName={cssClasses.active}to={props.path}>{props.link}</NavLink>
}

export default NavItem