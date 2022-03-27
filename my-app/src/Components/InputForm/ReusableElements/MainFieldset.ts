import styled from 'styled-components'
import { IValid } from '../../../types/Intefaces'
import BaseColors from './BaseColors'

const MainFieldset = styled.fieldset<IValid>`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
  min-width: 150px;
  background: ${BaseColors.white};
  border: ${(props) =>
    props.dirty === false
      ? `2px solid ${BaseColors.grey}`
      : props.valid === true
      ? `2px solid ${BaseColors.grey}`
      : `2px solid ${BaseColors.red}`};
  border-radius: 0.8em;
  padding: 0px;
  > legend {
    color: ${(props) =>
      !props.dirty
        ? `${BaseColors.grey}`
        : props.valid
        ? `${BaseColors.grey}`
        : `${BaseColors.red}`};
  }
  &:focus-within {
    border: 2px solid ${BaseColors.blue};
  }
  :focus-within > legend {
    color: ${BaseColors.blue};
  }
`

export default MainFieldset
