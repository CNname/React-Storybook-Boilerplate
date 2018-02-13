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
export const Description = styled.div`
  font-family: lato, sans-serif;
  font-size: 16px;
  color: ${colors.text.black};
  font-weight: 400;
  margin: 0;
`
export const IconList = styled.ul`
  color: ${colors.text.grey};
  font-size: 16px;
  margin: 0;
  margin-top: 20px;
  padding: 0;
  list-style: none;
`
export const IconListItem = styled.li`
  display: inline-block;
  margin-right: 15px;
`

export const IconLink = styled.a`
  color: ${colors.text.grey};
  text-decoration: none;
`