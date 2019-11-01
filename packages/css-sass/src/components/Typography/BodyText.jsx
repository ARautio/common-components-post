import React from 'react'
import { oneOf, oneOfType, node, arrayOf } from 'prop-types'
import classnames from 'classnames'
import './typography.scss'

/**
 * BodyText is a base text component
 *
 * @component
 * @example
 * return (
 *   <BodyText>Bodytext</BodyText>
 * )
 **/

const propTypes = {
  /**
   * Aligns text either left, center or right
   */
  align: oneOf(['left', 'center', 'right']),
  children: oneOfType([arrayOf(node), node]).isRequired
}

const BodyText = ({ children, align }) => (
  <p className={classnames('text', 'text--bodytext', `text--align-${align}`)}>
    {children}
  </p>
)

BodyText.propTypes = propTypes
export default BodyText
