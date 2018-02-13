import styled, { css } from 'styled-components'
import colors from '../colors';

export const PersonCard = styled.div`
  text-align: center;
`

export const Name = styled.h2`
  font-family: futura-pt-bold, sans-serif;
  font-size: 22px;
  color: ${colors.text.black};
  line-height: 1.4em;
  margin: 0;
`

export const Title = styled.h3`
  font-family: lato, sans-serif;
  font-size: 16px;
  color: ${colors.text.grey};
  font-weight: 700;
  margin: 0;
  margin-top: 20px;
`