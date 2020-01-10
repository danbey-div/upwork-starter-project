import styled, { css } from 'styled-components'

const Navigation = styled.div<{ direct: 'left' | 'right' }>`
  ${(props) =>
    props.direct === 'left' &&
    css`
      left: 20px;
    `}
  ${(props) =>
    props.direct === 'right' &&
    css`
      right: 20px;
    `}
  top: 18px;
  width: 0;
  height: 0;
  position: absolute;
  border-top: 5px solid transparent;
  cursor: pointer;
  border-bottom: 5px solid transparent;
  ${(props) =>
    props.direct === 'left' &&
    css`
      border-right: 5px solid #0a2b52;
    `}
  ${(props) =>
    props.direct === 'right' &&
    css`
      border-left: 5px solid #0a2b52;
    `}
`

export default Navigation
