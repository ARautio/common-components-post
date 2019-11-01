import React from 'react'
import { number, oneOfType, arrayOf, node } from 'prop-types'
import classnames from 'classnames'
import './Column.scss'

/**
 * Grid column which handles single column of the grid
 *
 * @component
 * @example
 * return (
 *   <Grid.Column grid={10}>Grid</Grid.Column>
 * )
 **/

const propTypes = {
  /**
   * Size of the grid. The grid in this case is splitted in to 12 parts.
   */
  grid: number,
  children: oneOfType([arrayOf(node), node]).isRequired
}

const defaultProps = {
  grid: 1
}

const Column = ({ children, grid }) => (
  <div
    className={classnames('grid', 'grid--column', `grid--column--grid-${grid}`)}
  >
    {children}
  </div>
)

Column.propTypes = propTypes
Column.defaultProps = defaultProps
export default Column
