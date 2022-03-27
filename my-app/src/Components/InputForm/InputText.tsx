import React, { useState } from 'react'
import styled from 'styled-components'
import { Form } from 'react-bootstrap'
import InputMask from 'react-input-mask'

import InputLegend from './InputLegend'
import RequiredField from './RequiredField'
import MainFieldset from './ReusableElements/MainFieldset'

import '../../fonts/font-OpenSans.css'

interface MyProps {
  legend?: string;
  text?: string;
  changeText?(event: React.ChangeEvent<HTMLInputElement>): void;
  placeholder?: string;
  valid: boolean;
  controlId?: string;
}

const Text = styled(Form.Control)<MyProps>`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 100%;
  font-size: 14px;
  letter-spacing: 0.25px;
  color: #353238;
  border: 0px;
  margin: 0px 10px;
  padding: 0px;
  width: 100%;
  & html {
    font-family: "Open Sans", sans-serif;
  }
  &:focus {
    outline: none;
    border: 0px;
    box-shadow: 0 0 0 0;
  }
  &::-webkit-input-placeholder {
    color: #cdcad0;
  }
`

const MaskedInput = styled(InputMask)<MyProps>`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 100%;
  font-size: 14px;
  letter-spacing: 0.25px;
  color: #353238;
  border: 0px;
  margin: 0px 10px;
  padding: 0px;
  width: 100%;
  & html {
    font-family: "Open Sans", sans-serif;
  }
  &:focus {
    outline: none;
    border: 0px;
    box-shadow: 0 0 0 0;
  }
  &::-webkit-input-placeholder {
    color: #cdcad0;
  }
`

const InputText: React.FunctionComponent<MyProps> = (props) => {
  const [dirty, setDirty] = useState(false)
  let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.changeText!(e)
    return e
  }
  handleChange = handleChange.bind(this)

  return (
    <>
      <MainFieldset dirty={dirty} valid={props.valid}>
        <InputLegend>{props.legend}</InputLegend>
        {props.controlId === 'telephone'
          ? (
          <MaskedInput
            valid={props.valid}
            onBlur={() => {
              setDirty(true)
            }}
            controlId={props.controlId}
            mask="+7(999)999-99-99"
            value={props.text}
            onChange={handleChange}
            placeholder={props.placeholder}
          ></MaskedInput>
            )
          : (
          <Text
            valid={props.valid}
            onBlur={() => {
              setDirty(true)
            }}
            controlId={props.controlId}
            value={props.text}
            onChange={handleChange}
            placeholder={props.placeholder}
          ></Text>
            )}
      </MainFieldset>
      {!props.valid && dirty && props.text!.length === 0 && <RequiredField />}
    </>
  )
}

export default InputText
