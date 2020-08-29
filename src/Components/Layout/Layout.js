import React from 'react'
import Toolbar from "../ToolBar/ToolBar"

const Layout = (props)=>
{
    return <div>
       <Toolbar></Toolbar>
       {props.children}
    </div>
}

export default Layout