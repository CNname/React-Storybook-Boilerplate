import styled, { css } from 'styled-components'
import colors from '../colors';

export const Header = styled.div`
  color: ${colors.text.white};
  padding: 15px 30px;
  height: 60px;
  display: flex;
  justify-content: space-between;
`
export const Logo = styled.img`
  height: 30px;
`

export const Navigation = styled.div`
 a {

   font-family: lato;
   padding-left: 30px;
 }
`

export const NavLink = styled.a`
  color: ${colors.text.white};
  &:hover {
    color: ${colors.primary.green};
  }
`
