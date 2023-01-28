import React from 'react'
import "./viewportHeader.scss";

export default function ViewportHeader({text}:{text :String}) : JSX.Element {
  /* header component for viewport */
  return (
    <div className='viewport-header-container'>
      <div role='heading'  className='viewport-header-container-text'>
        {text}
      </div>
    </div>
  )
}
