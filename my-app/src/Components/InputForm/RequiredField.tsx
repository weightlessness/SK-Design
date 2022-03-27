import React from 'react'
import styled from 'styled-components'

const Field = styled.div`
  color: #eb5e55;
  font-weight: 400;
  font-size: 12px;
  margin: 0px 10px;
`

const RequiredField = () => {
  return <Field>Обязательное поле</Field>
}

export default RequiredField
