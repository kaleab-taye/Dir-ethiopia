import React from 'react'
import './viewportDisplayContainer.scss';

export default function ViewportDisplayContainer({children}:{children:JSX.Element}) : JSX.Element {
  return (
    <div className='viewportDisplayContainer'>{children}</div>
  )
}
