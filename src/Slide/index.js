import React from 'react'

import * as s from './styles.js'

const Slide = (props) => {
  return (
    <s.Slide>
      <h2>{props.title}</h2>
      <s.BodyText>{props.bodyText}</s.BodyText>
      {props.buttonText &&
        <s.SlideButtonWrapper>
          <s.SlideButton>{props.buttonText}</s.SlideButton>
        </s.SlideButtonWrapper> 
      }
    </s.Slide>
  )
}

export default Slide
