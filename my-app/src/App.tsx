import React from 'react'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'

import DummyContainer from './Components/DummyContainer/DummyContainer'
import InputForm from './Components/InputForm/InputForm'
import store from './store/store'

import 'bootstrap/dist/css/bootstrap.css'

const FullHeightContainer = styled(Container)`
  height: 100vh;
`

const FullHeightRow = styled(Row)`
  height: 100vh;
`

export default function App () {
  return (
    <Provider store={store}>
      <FullHeightContainer fluid>
        <FullHeightRow className="justify-content-center align-items-center">
          <Col xs={10} sm={10} md={7} lg={6} xl={5} xxl={5}>
            <DummyContainer />
          </Col>
          <Col xs={10} sm={10} md={7} lg={5} xl={5} xxl={4}>
            <InputForm />
          </Col>
        </FullHeightRow>
      </FullHeightContainer>
    </Provider>
  )
}
