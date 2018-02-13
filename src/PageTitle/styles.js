import styled, { css } from 'styled-components';
import colors from '../colors';


export const PageTitle = styled.div`
  background: ${colors.background.black};
  padding: 20px;
`

export const Title = styled.div`
  font-size: 30px;
  text-transform: uppercase;
  color: ${colors.text.white};
  padding: 20px;
`

export const Hr = styled.div`
  width: 4em;
  border-bottom: 3px solid ${colors.text.white};
  margin-top: 20px;
`
