import React from 'react'

import logo from '../../assets/SiteLogo.svg';
import * as s from './styles.js'

const Header = (props) => {
  return (
    <s.Header>
      <s.Logo
      src={logo}
      />
      <s.Navigation>
        <s.NavLink href="/">Home</s.NavLink>
        <s.NavLink href="/">About</s.NavLink>
      </s.Navigation>
    </s.Header>
  )
}

export default Header
