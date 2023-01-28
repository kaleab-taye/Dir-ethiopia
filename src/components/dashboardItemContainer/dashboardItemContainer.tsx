import React from 'react'
import './dashboardItemContainer.scss'

export default function DashboardItemContainer({heading,children}: { heading : string, children: JSX.Element}) : JSX.Element {
  return (
    <div className='dashboardItemContainer'>
        <div className='dashboardItemContainer-heading'>{heading}</div>
        <div className='dashboardItemContainer-children'>
          {children}
          </div>
    </div>
  )
}
