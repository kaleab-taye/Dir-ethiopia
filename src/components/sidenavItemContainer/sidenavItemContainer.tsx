import React from 'react'
import './sidenavItemContainer.scss'

export default function SidenavItemContainer({children, heading}:{children : JSX.Element, heading: string}):JSX.Element {
  return (
    <div className='sidenavItemContainer'>
      <div className='sidenavItemContainer-container'>
        <div className='sidenavItemContainer-heading'>{heading}</div>
        <div className='sidenavItemContainer-children'>{children}</div>
      </div>
    </div>
  )
}
