import React from 'react'
import classnames from 'classnames'
import './Container.scss'

const Container = ({ children }) => (
  <div className={classnames('grid', 'grid--container')}>{children}</div>
)

export default Container
