import React from 'react'
import Button from '../Button'

import * as s from './styles.js'

const Slide = (props) => {
  console.log(props);
  return (
    <s.Slide inverted={props.inverted} background={props.background}>
      <s.SlideContent>
        <s.SlideTitle inverted={props.inverted}>{props.title}</s.SlideTitle>
        <s.BodyText inverted={props.inverted}>{props.bodyText}</s.BodyText>
        {props.buttonText &&
          <s.SlideButtonWrapper>
            <Button
              inverted={props.inverted}
              text={props.buttonText}
            />
          </s.SlideButtonWrapper>
        }
      </s.SlideContent>
    </s.Slide>
  )
}

export default Slide
