import { Drawer } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import SideNavBar from '../navbar/sideNavBar'
import "./navDrawer.scss";
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import IconStyler from '../../components/iconStyler/iconStyler';
import { useLocation } from 'react-router-dom';


interface Props {
  // locationDI (location dependency injection) use to detect page changes and close the drawer
  locationDI?: typeof useLocation
}

export default function NavDrawer({locationDI = useLocation}: Props) : JSX.Element {
    const drawerStateEnum = {open:true,closed:false}
    const [drawerState, setDrawerState] = useState(drawerStateEnum.closed)
    const location = locationDI()

    useEffect(()=>{
      setDrawerState(drawerStateEnum.closed)
    },[location])
    return (
        <div className='navDrawer-container'>
          <div onClick={()=>setDrawerState(drawerStateEnum.open)}>
              <IconStyler className='navDrawer-container-drawerToggler'>
                <AiOutlineMenuUnfold/>
              </IconStyler>
          </div>
          <Drawer
          // anchor={anchor}
          open={drawerState}
          onClose={()=>setDrawerState(drawerStateEnum.closed)}
          >
            <div className='navDrawer-container-navComponents' /* onClick={()=>setDrawerState(drawerStateEnum.closed)} */>
              <SideNavBar/>
            </div>
          </Drawer>
        </div>)
}

// setting the default props for location
NavDrawer.defaultProps = {
  location : location
}