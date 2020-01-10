import styled, { css } from 'styled-components'
import { Colors } from '../../lib/style-guide'

const Marked = styled.div<{ isSelected: boolean }>`
  position: absolute;
  width: 6px;
  height: 6px;
  left: 17px;
  bottom: 5px;
  border-radius: 50%;
  background: #4991e5;
  ${(props) =>
    props.isSelected &&
    css`
      background: ${Colors.PureWhite};
      color: #4991e5;
    `}
`

export default Marked
