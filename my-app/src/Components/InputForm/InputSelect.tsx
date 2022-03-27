import React, { useState } from 'react'
import styled from 'styled-components'

import IconArrow from '../../icons/IconArrow'
import InputLegend from './InputLegend'
import RequiredField from './RequiredField'
import DropDownContainer from './ReusableElements/DropDownContainer'
import DropDownHeader from './ReusableElements/DropDownHeader'
import MainFieldset from './ReusableElements/MainFieldset'
import BaseColors from './ReusableElements/BaseColors'

import { IValid } from '../../types/Intefaces'

import '../../fonts/font-OpenSans.css'

interface MyProps {
  children: React.ReactNode;
  options: string[];
  onSelect(ID: string, value: string): void;
  controlId: string;
  valid: boolean;
  value?: string;
}

const Main = styled(MainFieldset)<IValid>`
  box-sizing: border-box;
  border-radius: 0.8em;
  & html {
    font-family: "Open Sans", sans-serif;
  }
  width: 100%;
  position: relative;
`
const DropDownList = styled('ul')`
  background: ${BaseColors.white};
  border-radius: 4px;
  border: 0px solid ${BaseColors.grey};
  box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
  transition: all 0.1s ease 0s;
  transform: translateY(0px);
  opacity: 1;
  pointer-events: all;
  top: calc(100%);
  z-index: 999;
  position: absolute;
  padding-inline-start: 0px;
  border: 2px solid ${BaseColors.grey};
  box-sizing: border-box;
  box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
  border-radius: 8px;
  width: 100%;
  :first-child {
    border-top: 0px;
  }
`
const ListItem = styled('li')`
  list-style: none;
  height: 2em;
  border-top: 2px solid ${BaseColors.grey};
  padding: 6px 10px;
  vertical-align: middle;
  &:hover {
    background: #fafafa;
    cursor: default;
  }
`

const InputSelect: React.FunctionComponent<MyProps> = (props) => {
  const [dirty, setDirty] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
    if (!isOpen) setDirty(true)
  }

  const onOptionClicked = (value: string) => () => {
    setIsOpen(false)
    props.onSelect(props.controlId, value)
  }

  return (
    <>
      <Main
        dirty={dirty}
        valid={props.valid}
        onClick={toggle}
        tabIndex={0}
        onBlur={() => {
          setIsOpen(false)
        }}
      >
        {isOpen && <InputLegend>{props.children}</InputLegend>}
        <DropDownContainer>
          <DropDownHeader>
            {isOpen ? '' : props.value || props.children}
            <IconArrow open={isOpen} />
          </DropDownHeader>
          {isOpen && (
            <div>
              <DropDownList>
                {props.options.map((option) => (
                  <ListItem
                    onClick={onOptionClicked(option)}
                    key={props.controlId}
                  >
                    {option}
                  </ListItem>
                ))}
              </DropDownList>
            </div>
          )}
        </DropDownContainer>
      </Main>
      { !props.valid && dirty && <RequiredField></RequiredField> }
    </>
  )
}

export default InputSelect
