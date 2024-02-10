import styled from 'styled-components'
import { colors } from '../../styles'

export const ImageBanner = styled.div`
  width: 100%;
  height: 186px;
`
export const ContentBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${colors.rose};
    text-decoration: none;
    font-weight: bold;
    margin-top: 64px;
  }
`
export const TitleHeader = styled.a`
  font-weight: 900;
  font-size: 18px;
`
