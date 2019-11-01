import React from 'react'
import classnames from 'classnames'
import './typography.scss'

const BodyText = ({ children, align }) => (
  <p className={classnames('text', 'text--bodytext', `text--align-${align}`)}>
    {children}
  </p>
)

export default BodyText
