import React from 'react'
import { render } from 'react-dom'
import './theme.scss'

import { Heading1, BodyText } from '~/components/Typography'
import * as Grid from '~/components/Grid'

const root = (
  <Grid.Container>
    <Grid.Column grid={12}>
      <Heading1 align="center">Centered Title</Heading1>
    </Grid.Column>
    <Grid.Column grid={6}>
      <BodyText align="center">This is the left side</BodyText>
    </Grid.Column>
    <Grid.Column grid={6}>
      <BodyText align="center">This is the right side</BodyText>
    </Grid.Column>
  </Grid.Container>
)

render(root, document.getElementById('root'))
