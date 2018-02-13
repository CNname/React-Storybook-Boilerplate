import React from 'react'

import * as s from './styles.js'

const PersonCard = (props) => {
  return (
    <s.PersonCard>
      <img className="img" src={props.imageUrl} />
      <s.Name>{props.name}</s.Name>
      <s.Title>{props.title}</s.Title>
      <s.Description>{props.description}</s.Description>

    </s.PersonCard>
  )
}

export default PersonCard
