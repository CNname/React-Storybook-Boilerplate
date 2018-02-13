import React from 'react'

import * as s from './styles.js'

const PersonCard = (props) => {
  return (
    <s.PersonCard>
      <div>{props.name}</div>
      <img class="img" src={props.imageUrl} />>
    </s.PersonCard>
  )
}

export default PersonCard
