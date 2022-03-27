import React, { useState } from 'react'
import styled from 'styled-components'

import IconArrow from '../../icons/IconArrow'
import DropDownContainer from './ReusableElements/DropDownContainer'
import CustomRow from './ReusableElements/CustomRow'
import DropDownHeader from './ReusableElements/DropDownHeader'

import '../../fonts/font-OpenSans.css'

interface MyProps {
  children?: React.ReactNode;
}

const Main = styled('fieldset')`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 100%;
  border: 0px;
`

const Header = styled(DropDownHeader)`
  color: #353238;
  height: 21px;
  line-height: 150%;
  width: fit-content;
  padding-left: 0px;
  position: relative;
  display: flex;
  justify-content: flex-start
`

const ArrowToLeft = styled(IconArrow)`
position: static;`

const AdditionalFields: React.FunctionComponent<MyProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Main>
      <DropDownContainer>
        <Header onClick={toggle}>
          Показать дополнительные поля <ArrowToLeft open={isOpen} />
        </Header>
        {isOpen &&
          React.Children.map(props.children, (child) => (
            <CustomRow>{child}</CustomRow>
          ))}
      </DropDownContainer>
    </Main>
  )
}
export default AdditionalFields
