  import React from 'react'

import * as s from './styles.js'

const Hero = (props) => {
  return (
    <s.Hero bgImage={props.bgImage}>
    <div>
      <s.Image src={props.image}/>
      <s.Title>{props.title}</s.Title>
      <s.Subtitle>{props.subtitle}</s.Subtitle>
      {props.cta}
    </div>
    </s.Hero>
  )
}

export default Hero
