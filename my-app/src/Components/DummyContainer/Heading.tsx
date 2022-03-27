import React from 'react'
import styled from 'styled-components'
import '../../fonts/font-SF.css'

const Head = styled.span`
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: static;
  width: 100%;
  margin: 2em 0em 2em 0em;
`

const HeadingLabel = styled.label`
  font-family: "SF UI Display";
  font-style: normal;
  font-weight: 600;
  font-size: 1.7em;
  line-height: 150%;
  color: #353238;
`

export default function Heading () {
  return (
    <Head>
      <HeadingLabel>
        Оставьте заявку и станьте частью нашей команды
      </HeadingLabel>
    </Head>
  )
}
