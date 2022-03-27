import styled from 'styled-components'
import { ReactComponent as IconMenu } from './loader.svg'

const IconLoader = styled(IconMenu)`
  width: 30px;
  height: 30px;
  animation: rotate 2s linear infinite;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`
export default IconLoader
