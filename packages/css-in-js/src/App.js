import React from 'react'
import { ThemeProvider as JSSThemeProvider } from 'react-jss'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import JSSButton from './components/JSSButton'
import StyledButton from './components/StyledButton'
import { Container, Column } from './components/Grid'

const theme = {
  colorPrimary: 'green'
}

const App = () => (
  <Container>
    <Column grid={6}>
      <JSSThemeProvider theme={theme}>
        <JSSButton>This button is setup by JSS</JSSButton>
      </JSSThemeProvider>
    </Column>
    <Column grid={6}>
      <StyledThemeProvider theme={theme}>
        <StyledButton>This button is setup by Styled-components</StyledButton>
      </StyledThemeProvider>
    </Column>
  </Container>
)

export default App
