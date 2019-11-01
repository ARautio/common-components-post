import React from 'react'
import { number } from 'prop-types'
import classnames from 'classnames'
import './Column.scss'

const propTypes = {
  grid: number
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
