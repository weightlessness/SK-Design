import React from 'react'
import styled from 'styled-components'

interface MyProps {
  children?: React.ReactNode;
}

const Legend = styled.legend<MyProps>`
  height: 12px;
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0.25px;
  margin: 0px 10px;
  float: none;
  width: fit-content;
`

const InputLegend: React.FunctionComponent<MyProps> = (props) => (
  <Legend>{props.children}</Legend>
)

export default InputLegend
