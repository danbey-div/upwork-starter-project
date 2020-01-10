import styled from 'styled-components'
import { Colors } from '../../lib/style-guide'

const Frame = styled.div`
  margin: 20px;
  width: 320px;
  height: fit-content;
  left: 0px;
  top: 0px;
  background: ${Colors.PureWhite};
  border: 1px solid ${Colors.BG1};
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(50, 73, 100, 0.1);
`

export default Frame
