import React, { useState , Fragment} from 'react'
import cssClasses from './ToolBar.module.scss'
import NavItem from '../ToolBar/NavItem/NavItem'
import ropeWalker from '../../Assets/Images/Logo.png'
import HamburgerMenu from '../ToolBar/HamburgerMenu/HamburgerMenu'
import Menu from '../ToolBar/HamburgerMenu/Menu/Menu'


const ToolBar = ()=>

{
    const [show,toggleShow] = useState(false);
    return <Fragment>
        <HamburgerMenu clicked={toggleShow.bind(null,prevState=>{return !prevState })} show={show}></HamburgerMenu>
        <Menu show={show}>
        <ul >
            <li onClick={toggleShow.bind(null,prevState=>{return !prevState })}><NavItem link ="Home" path="/"></NavItem></li>
            <li onClick={toggleShow.bind(null,prevState=>{return !prevState })}><NavItem link ="About" path="/About"></NavItem></li>
            <li onClick={toggleShow.bind(null,prevState=>{return !prevState })}><NavItem link ="Projects" path="/Projects"></NavItem></li>
            <li onClick={toggleShow.bind(null,prevState=>{return !prevState })}><NavItem link ="Contact" path="/Contact"></NavItem></li>
            <li onClick={toggleShow.bind(null,prevState=>{return !prevState })}><a className={cssClasses.DownLink} href="/app-debug.apk" download>Download Resume</a></li>
        </ul>
        </Menu>
     <header className={cssClasses.Header}>
        <img className={cssClasses.Logo} src={ropeWalker}  alt="logo"></img>
        <ul className={cssClasses.NavItems}>
            <li><NavItem link ="Home" path="/"></NavItem></li>
            <li><NavItem link ="About" path="/About"></NavItem></li>
            <li><NavItem link ="Projects" path="/Projects"></NavItem></li>
            <li><NavItem link ="Contact" path="/Contact"></NavItem></li>
            <li><a className={cssClasses.DownLink} href="/app-debug.apk" download>Download Resume</a></li>
        </ul>
    </header>
    </Fragment>
}


export default ToolBar