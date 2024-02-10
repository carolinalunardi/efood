import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  display: block;
  margin-bottom: 48px;
  position: relative;

  img {
    vertical-align: middle;
  }
`
export const Infos = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 16px;
`
export const Rating = styled.div`
  display: flex;
  gap: 8px;
  }
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`
export const InfosContainer = styled.div`
  padding: 8px;
  border: 1px solid ${colors.rose};
  border-top: none;
`
export const ImageContainer = styled.div`
  display: block;
`
export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
