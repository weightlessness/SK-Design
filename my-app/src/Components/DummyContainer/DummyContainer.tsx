import React from 'react'
import { Form } from 'react-bootstrap'

import Logo from './Logo'
import Heading from './Heading'
import Text from './Text'

export default function DummyContainer () {
  return (
    <Form.Group>
      <Logo />
      <Heading />
      <Text />
    </Form.Group>
  )
}
