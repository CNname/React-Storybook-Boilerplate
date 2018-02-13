import React from 'react'

import * as s from './styles.js'

const PersonCard = (props) => {
  return (
    <s.PersonCard>
      <s.Name>{props.name}</s.Name>
      <s.Title>{props.title}</s.Title>
      <img className="img" src={props.imageUrl} />

    </s.PersonCard>
  )
}

export default PersonCard
