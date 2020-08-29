import React from 'react'
import Styled from 'styled-components'
import cssClasses from './Button.module.scss'

const Butn = Styled.button`
width:${props=>props.width}px;
height:${props=>props.height}px;
`
const Button = (props)=>
{
return <Butn className={cssClasses.Main}width={props.width} height={props.height} onClick={props.clicked}>{props.btnName}</Butn>
}

export default Button