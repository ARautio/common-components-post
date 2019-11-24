import styled from 'styled-components'
import { number, oneOfType, arrayOf, node } from 'prop-types'

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

const Column = styled('div').attrs(props => ({
  grid: props.grid
}))`
  width: ${props => (props.grid / 12) * 100}%;
`

Column.propTypes = propTypes
Column.defaultProps = defaultProps
export default Column
