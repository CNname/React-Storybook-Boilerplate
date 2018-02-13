import styled, { css } from 'styled-components'
import colors from '../colors';


export const Slide = styled.div`
  width: 100%;
  max-width: 1080px;
  padding: 50px 0;
  background-color: ${(props) => props.inverted ? colors.background.white : colors.background.black};
  background-image: ${(props) => props.background ? `url(${props.background})` : 'none'};
`

export const SlideContent = styled.div`
  padding: 50px 35px 50px 36px;
  width: 80%;
  margin: 0 auto;
`

export const SlideTitle = styled.h2`
  font-size: 40px;
  font-family: futura-pt-bold;
  color: ${(props) => props.inverted ? colors.text.black : colors.text.white};
`

export const SlideButtonWrapper = styled.div`
  text-align: center;
`

export const BodyText = styled.p`
  font-family: lato;
  color: ${(props) => props.inverted ? colors.text.black : colors.text.white};
  padding-bottom: 1em;
  line-height: 1.7;
`
