import styled from 'styled-components'
import { colors } from '../../styles'

export const CardProduct = styled.div`
  background-color: ${colors.rose};
  padding: 8px;
  margin-bottom: 32px;

  h3 {
    color: ${colors.lightRose};
    font-weight: 900;
    font-size: 16px;
    display: block;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  p {
    color: ${colors.lightRose};
    font-size: 14px;
    line-height: 22px;
    display: block;
    margin-bottom: 8px;
  }
`
