import React from 'react'

import * as s from './styles.js'

const Typography = (props) => {
  switch(props.font) {
    case "latobold": {
      return (
        <s.LatoBold>{props.children}</s.LatoBold>
      )
    }
    default:
      return (
        <s.Lato>{props.children}</s.Lato>
      )
  }

}

export default Typography
