import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${colors.rose};
  z-index: 1;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
  }
`
export const Item = styled.li`
  background-color: ${colors.lightRose};
  display: flex;
  padding: 8px;
  margin-bottom: 16px;
  position: relative;

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-height: 22px;
    margin-bottom: 8px;
  }
`
export const TrashIcon = styled.div`
  position: absolute;
  right: 8px;
  bottom: 8px;
  z-index: 1;
`

export const Total = styled.div`
  color: ${colors.lightRose};
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 24px;
`
