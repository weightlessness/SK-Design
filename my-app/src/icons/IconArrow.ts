import styled from 'styled-components'
import { ReactComponent as IconMenu } from './uparrow.svg'

interface MyProps {
  open: boolean;
}

const IconArrow = styled(IconMenu)<MyProps>`
  position: absolute;
  right: 10px; 
  float:left;
  width: 10px;
  height: 10px;
  margin-right: 22.3px;
  margin-left: 8px;
  order: 1;
  transform: ${(props) => (props.open ? 'translateY(-3px)' : 'rotate(180deg)')};
`
export default IconArrow
