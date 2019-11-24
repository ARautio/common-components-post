import React from 'react'
import { oneOfType, arrayOf, node, bool } from 'prop-types'
import { createUseStyles, useTheme } from 'react-jss'

/**
 * Button styled with JSS
 *
 * @component
 * @example
 * return (
 *   <StyledButton>Button text</StyledButton>
 * )
 * @param {object} params - Props
 * @param {*} params.children - Button content
 **/

const useStyles = createUseStyles(theme => ({
  myButton: {
    background: theme.colorPrimary,
    margin: {
      top: 8,
      bottom: 8,
      left: 8,
      right: 8
    },
    padding: theme.big ? 8 : 4,
    '& span': {
      fontWeight: 'bold',
      color: 'white'
    }
  }
}))

const propTypes = {
  big: bool,
  children: oneOfType([arrayOf(node), node]).isRequired
}

const JSSButton = ({ children, big, ...props }) => {
  const theme = useTheme()
  const classes = useStyles({ big, ...props, theme })
  return (
    <button className={classes.myButton}>
      <span>{children}</span>
    </button>
  )
}

JSSButton.propTypes = propTypes

export default JSSButton
