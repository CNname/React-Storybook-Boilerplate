import styled, { css } from 'styled-components'
import colors from '../colors';

export const Hero = styled.div`
  color: ${colors.text.white};
  background-color: blue;
  background-image: url(${props => props.bgImage});
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-align: center;
`

export const Image = styled.img`
  color: red;
  width: 100px;
  margin-bottom: 10px;
`

export const Title = styled.div`
text-transform: uppercase;
font-size: 48px;
`

export const Subtitle = styled.h3`
margin-bottom: 20px;
font-size: 20px;
`
