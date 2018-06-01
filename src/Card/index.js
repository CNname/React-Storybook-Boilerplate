import React from 'react'

import * as s from './styles.js'

const Card = (props) => {
  return (
    <s.Card backgroundImage={props.backgroundImage}>
      <s.Content>
        <s.Title inverted={props.inverted}>{props.title}</s.Title>
        <s.Text inverted={props.inverted}>{props.bodyText}</s.Text>
      </s.Content>
    </s.Card>
  )
}

export default Card
