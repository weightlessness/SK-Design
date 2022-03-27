import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Col } from 'react-bootstrap'
import styled from 'styled-components'

import citiesJSON from './../../API/cities.json'
import sourcesJSON from './../../API/sources.json'

import CustomRow from './ReusableElements/CustomRow'
import InputText from './InputText'
import InputSelect from './InputSelect'
import AdditionalFields from './AdditionalFields'
import SubmitButton from './SubmitButton'
import Validation from './Validation'
import BaseColors from './ReusableElements/BaseColors'

import { INamedNodeMap } from './../../types/Intefaces'

const cities: string[] = citiesJSON.map((city) => {
  return city.name
})
const sources: string[] = sourcesJSON.map((source) => {
  return source
})

const CustomForm = styled(Form)`
  background: ${BaseColors.white};
  box-shadow: 0px 5px 20px rgba(53, 50, 56, 0.14);
  border-radius: 8px;
  @media (max-width: 530px) {
    padding: 10px 0px;
  }
  @media (min-width: 531px) {
    padding: 40px 30px;
  }
`

const MobilCol = styled(Col)`
  @media (max-width: 446px) {
    margin: 10px 0px 0px 0px;
  }
`

export default function InputForm () {
  const dispatch = useDispatch()
  const state = useSelector((state : any) => state)
  const fields = state.fieldsReducer
  const clickedValidated = state.validateReducer.valid
  const formRef = useRef<any>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const attributes: INamedNodeMap = e.target.attributes
    dispatch({
      type: attributes.controlid!.nodeValue,
      payload: e.target.value
    })
  }

  const handleSelect = (ID: string, value: string) => {
    dispatch({ type: ID, payload: value })
  }

  const handleSubmit = () => {
    const timeout = 2000
    if (ValidButton()) {
      dispatch({ type: 'loading', payload: true })
      setTimeout(() => {
        console.log(JSON.stringify(fields))
        dispatch({ type: 'loading', payload: false })
        dispatch({ type: 'valid', payload: true })
        dispatch({ type: 'clear', payload: false })
        formRef!.current!.reset()
      }, timeout)
    }
  }

  const ValidButton = () => {
    return Validation(fields).all()
  }

  return (
    <CustomForm ref={formRef}>
      <CustomRow>
        <Col>
          <InputText
            controlId="name"
            valid={clickedValidated || Validation(fields).name()}
            legend="Ваше имя*"
            text={fields.name}
            changeText={handleChange}
            placeholder="Иван"
          ></InputText>
        </Col>
        <MobilCol>
          <InputText
            controlId="telephone"
            valid={clickedValidated || Validation(fields).telephone()}
            text={fields.telephone}
            changeText={handleChange}
            legend="Номер телефона*"
            placeholder="+7 (000) 000-00-00"
          ></InputText>
        </MobilCol>
      </CustomRow>
      <CustomRow>
        <Col>
          <InputText
            controlId="email"
            valid={clickedValidated || Validation(fields).email()}
            text={fields.email}
            changeText={handleChange}
            legend="E-mail*"
            placeholder="example@skdesign.ru"
          ></InputText>
        </Col>
        <MobilCol>
          <InputText
            controlId="profile"
            valid={clickedValidated || Validation(fields).profile()}
            text={fields.profile}
            changeText={handleChange}
            legend="Ссылка на профиль*"
            placeholder="instagram.com/skdesign"
          ></InputText>
        </MobilCol>
      </CustomRow>
      <CustomRow>
        <Col>
          <InputSelect
            valid={clickedValidated || Validation(fields).city()}
            onSelect={handleSelect}
            controlId="city"
            options={cities}
            value = {fields.city}
          >
            Выберите город*
          </InputSelect>
        </Col>
      </CustomRow>
      <CustomRow>
        <Col>
          <InputText
            controlId="studio"
            text={fields.studio}
            changeText={handleChange}
            valid={true}
            legend="Название организации/студии"
            placeholder="SK Design"
          ></InputText>
        </Col>
      </CustomRow>
      <CustomRow>
        <AdditionalFields>
          <InputText
            controlId="receiver"
            text={fields.receiver}
            changeText={handleChange}
            legend="Получатель"
            placeholder="ФИО"
            valid={true}
          ></InputText>
          <InputSelect
            valid={true}
            onSelect={handleSelect}
            controlId="sources"
            options={sources}
            value = {fields.sources}
          >
            Откуда узнали про нас?{' '}
          </InputSelect>
        </AdditionalFields>
      </CustomRow>
      <CustomRow>
        <Col>
          <SubmitButton
            onClick={handleSubmit}
            loading={state.loadReducer.loading}
            valid={ValidButton()}
          >
            Отправить заявку
          </SubmitButton>
        </Col>
      </CustomRow>
    </CustomForm>
  )
}
