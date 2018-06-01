import React from 'react'
import Button from '../Button'

import * as s from './styles.js'

const ImageWithText = (props) => {
  return (
    <s.ImageWithText inverted={props.inverted}>
      <s.Content>
        <s.Image backgroundImage={props.backgroundImage} />
        <s.Title inverted={props.inverted}>{props.title}</s.Title>
        <s.Text inverted={props.inverted}>{props.bodyText}</s.Text>
      </s.Content>
    </s.ImageWithText>
  )
}

export default ImageWithText
