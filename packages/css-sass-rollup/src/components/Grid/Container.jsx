import React from 'react'
import { oneOfType, arrayOf, node } from 'prop-types'
import classnames from 'classnames'
import './Container.scss'

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

const Container = ({ children }) => (
  <div className={classnames('grid', 'grid--container')}>{children}</div>
)

Container.propTypes = propTypes
export default Container
