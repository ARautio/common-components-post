import React from 'react'
import { oneOfType, arrayOf, node } from 'prop-types'
import { createUseStyles, useTheme } from 'react-jss'

/**
 * Grid container which handles grid elements position
 *
 * @component
 * @example
 * return (
 *   <Grid.Container>Container</Grid.Container>
 * )
 **/

const propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired
}

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  }
})

const Container = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.container}>{children}</div>
}

Container.propTypes = propTypes
export default Container
