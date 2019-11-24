import React from 'react'
import styled from 'styled-components'

/**
 * Button styled with styled-components
 *
 * @component
 * @example
 * return (
 *   <StyledButton>Button text</StyledButton>
 * )
 * @param {object} params - Props
 * @param {*} params.children - Button content
 **/

const StyledButton = styled(({ children, ...props }) => (
  <button {...props}>
    <span>{children}</span>
  </button>
))`
  background: ${({ theme }) => theme.colorPrimary};
  margin: 8px;
  padding: ${({ big }) => (big ? '8px' : '4px')};
  & span {
    font-weight: bold;
    color: white;
  }
`

export default StyledButton
