import React from 'react'

import logo from '../../assets/dsconf-logo-small.png';
import * as s from './styles.js'

const Header = (props) => {
  return (
    <s.Header>
      <s.Logo
      src={logo}
      />
      <s.Navigation>
        <s.NavLink href="/">Home</s.NavLink>
        <s.NavLink href="/about">About</s.NavLink>
        <s.NavLink>Ticket info</s.NavLink>
        <s.NavLink>Program</s.NavLink>
        <s.NavLink>Venue & Location</s.NavLink>
      </s.Navigation>
    </s.Header>
  )
}

export default Header
