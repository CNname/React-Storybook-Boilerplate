import React from 'react'

import * as s from './styles.js'

const PersonCard = (props) => {
  return (
    <s.PersonCard>
      <h2>{props.name}</h2>
      <img src={props.imageUrl} />>
    </s.PersonCard>
  )
}

export default PersonCard
