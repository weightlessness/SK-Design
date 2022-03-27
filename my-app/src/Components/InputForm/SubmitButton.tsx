import React from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import BaseColors from './ReusableElements/BaseColors'

import IconLoader from '../../icons/IconLoader'

interface MyProps {
  children?: React.ReactNode;
  loading: boolean;
  valid: boolean;
  onClick(): void;
}

const CustomButton = styled(Button)<MyProps>`
  background-color: ${(props) =>
    props.valid === true ? `${BaseColors.pantone}` : `${BaseColors.grey}`};
  color: ${(props) =>
    props.valid ? `${BaseColors.white}` : `${BaseColors.buttonGrey}`};
  border-radius: 8px;
  width: 100%;
  height: 50px;
  border: 0px;
  :hover {
    background-color: ${(props) =>
      props.valid === true
        ? `${BaseColors.buttonHover}`
        : `${BaseColors.grey}`};
  }
  :focus {
    background-color: ${(props) =>
      props.valid === true
        ? `${BaseColors.buttonPressed}`
        : `${BaseColors.grey}`};
    box-shadow: 0 0 0 0;
  }
`

const SubmitButton: React.FunctionComponent<MyProps> = (props) => {
  return (
    <CustomButton valid={props.valid} onClick={props.onClick}>
      {props.loading ? <IconLoader /> : props.children}
    </CustomButton>
  )
}
export default SubmitButton
