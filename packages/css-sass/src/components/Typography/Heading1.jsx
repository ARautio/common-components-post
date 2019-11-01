import React from 'react'
import classnames from 'classnames'
import './typography.scss'

const Heading1 = ({ children, align }) => (
  <h1 className={classnames('text', 'heading1', `text--align-${align}`)}>
    {children}
  </h1>
)

export default Heading1
