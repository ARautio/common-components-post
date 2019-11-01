import React from 'react'

import { Heading1, BodyText } from '~/components/Typography'
import * as Grid from '~/components/Grid'

/**
 * This is an example from app component how to use the common components
 */
const App = () => (
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

export default App
