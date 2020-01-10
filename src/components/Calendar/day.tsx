import styled, { css } from 'styled-components'
import { FontWeights, Colors, FontSizes } from '../../lib/style-guide'

const Day = styled.button<{ isDisabled?: boolean; isSelected?: boolean }>`
width: 40px;
height: 40px;
background: ${Colors.PureWhite};
font-family: Proxima Nova;
font-style: normal;
font-weight: ${FontWeights.SHM};
${FontSizes.large};
line-height: 40px;
text-align: center;
vertical-align: middle;
position: relative;
outline: 0px
cursor: pointer;

${(props) =>
  props.isDisabled &&
  css`
    color: ${Colors.TX3};
  `}
${(props) =>
  !props.isDisabled &&
  css`
    &:hover {
      background: ${Colors.BG2};
    }
    &:active,
    &:focus {
      background: ${Colors.AccordBlue};
      color: ${Colors.PureWhite};
    }
  `}

  ${(props) =>
    props.isSelected &&
    css`
      background: ${Colors.AccordBlue};
      color: ${Colors.PureWhite};
    `}
`

export default Day
