import React from 'react'
import ViewportHeader from '../../components/viewPortHeader/viewportHeader'
import ViewportDisplayContainer from '../../components/viewportDisplayContainer/viewportDisplayContainer'
import "./adminViewport.scss"

export default function AdminViewport({pageName,children, sideBar, freeChildren = false  } : {pageName : String,children : JSX.Element, sideBar?:JSX.Element, freeChildren? : Boolean}) : JSX.Element {
  /* layout content for the for the viewport display */

  // the existence of sidebar checked to partition display into two
  const pageClassName = (sideBar != null)? 'adminViewport-mainContent adminViewport-mainContent-withRightSideBar': 'adminViewport-mainContent adminViewport-mainContent-withoutRightSideBar'
  return (
    <div className='adminViewport'>
      <ViewportHeader text={pageName} />
      <div className={pageClassName }>
        <div className='adminViewport-mainContent-center'>
          {
            /* this will check if we're in the dashboard page and outline the white background if we're not */
          freeChildren===false ?
              <ViewportDisplayContainer>
                <div>{children}</div>
              </ViewportDisplayContainer> 
              :
              <div className='adminViewport-mainContent-center-freeChildren'>{children}</div>}
        </div>
        <div className='adminViewport-mainContent-side'>
          {sideBar}
        </div>
       
      </div>
      <div className='adminViewport-bottomSpacer'></div>
    </div>
  )
}
