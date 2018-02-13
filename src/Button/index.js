/*
 * Button component. It provides interfaces for all types
 * of the buttons
 */

import React from 'react'

import * as s from './styles'


const Button = (props) => {

  if(props.inverted) {
    return (<s.ButtonInverted>{props.text}</s.ButtonInverted>)
  }

  return (
    <s.Button>{props.text}</s.Button>
  )
}

export default Button
