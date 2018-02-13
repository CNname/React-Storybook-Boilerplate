import React from 'react'

import * as s from './styles.js'

const PageTitle = (props) => {
  return (
    <s.PageTitle>
      {props.children}
      <s.Title>{props.title}</s.Title>
      <s.Hr />
    </s.PageTitle>
  )
}

export default PageTitle
