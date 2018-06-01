import styled, { css } from 'styled-components'
import colors from '../colors';


export const Card = styled.div`
  width: 500px
  padding: 50px 0;
  height: 500px;
  background-image: ${(props) => props.backgroundImage ? `url(${props.backgroundImage})` : 'none'};
  background-size: cover;
`

export const Content = styled.div`
  max-width: 40em;
  padding: 50px 35px 50px 36px;
  width: 80%;
  margin: 0 auto;
`

export const Title = styled.h4`
  font-size: 1.4em;
  font-family: futura-pt-bold;
  color: ${(props) => props.inverted ? colors.text.black : colors.text.white};
`

export const Text = styled.p`
  font-family: lato;
  color: ${(props) => props.inverted ? colors.text.black : colors.text.white};
  padding-bottom: 1em;
  line-height: 1.7;
`
