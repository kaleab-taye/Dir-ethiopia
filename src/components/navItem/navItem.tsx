import React, { useEffect, useState } from 'react'
import "./navItem.scss"
import IconStyler from '../iconStyler/iconStyler'
import { Link, useLocation } from 'react-router-dom'

export default function NavItem({text, children, to, location = useLocation()} : {text:String, children : JSX.Element, to:string , location?:any}) : JSX.Element {
  /* item component for the navigation bar */


  // used location to determine the current page
  const currentLocation = location;
  // the state to change the design of selected nav item
  const [selectedClass, setSelectedClass] = useState('nav-link-unselected');


  useEffect(()=>{
    
    // identifying the current page and setting different style if it is selected
    const path = currentLocation.pathname.split('/')
    const navPath = to.split('/')[2]

    if (path[2]===navPath && to !=='#'){
      setSelectedClass('nav-link-selected')
    }
    else{
      setSelectedClass('nav-link-unselected')
    }
    
      },[currentLocation])
  return (
    <Link role='nav-link' to={to} className='nav-link'>
      <div className={'nav-link-item'+ ` ${selectedClass}`}>
          <IconStyler className='nav-link-item-icon'>
            {children}
          </IconStyler>
          <div className='nav-link-item-text'>
              {text}
          </div>
      </div>
    </Link>
  )
}
