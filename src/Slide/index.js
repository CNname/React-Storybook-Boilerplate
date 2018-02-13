import React from 'react'
import Button from '../Button'

import * as s from './styles.js'

const Slide = (props) => {
  return (
    <s.Slide>
      <s.SlideContent>
        <s.SlideTitle>{props.title}</s.SlideTitle>
        <s.BodyText>{props.bodyText}</s.BodyText>
        {props.buttonText &&
          <s.SlideButtonWrapper>
            <Button
              inverted={props.buttonInverted}
              text={props.buttonText}
            />
          </s.SlideButtonWrapper>
        }
      </s.SlideContent>
    </s.Slide>
  )
}

export default Slide
