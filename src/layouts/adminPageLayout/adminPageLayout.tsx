import React from 'react'
import SideNavBar from '../navbar/sideNavBar'
import { PageHeader } from '../pageHeader/pageHeader'
import './adminPageLayout.scss'
import { Outlet } from "react-router-dom"
// import NavDrawer from '../navDrawer/navDrawer'

export default function AdminPage() : JSX.Element {
    /* describe the entire page layout of the admin page */
  return (
    <div className='admin-page'>
        <div className='admin-page-layout-header'>
            <PageHeader/>
        </div>
        <div className='admin-page-layout-body'>
            
            <div className='admin-page-layout-body-nav'>
                <SideNavBar/>
            </div>
            <div className='admin-page-layout-body-viewport'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}
