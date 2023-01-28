import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import AdminPage from '../../views/adminPageLayout/adminPage'
import PageNotFound from '../../components/pageNotFound/pageNotFound'
// import AdminPageRoute from '../adminPageRoute/adminPageRoute'
// import Messages from '../../views/messages/messages'
// import Inventory from '../../views/inventory/inventory'
// import Dashboard from '../../views/dashboard/dashboard'
import AdminPageRoute from '../adminPageRoute/adminPageRoute'

export default function AppRoutes() : JSX.Element {
  return (
    <Routes> 
        <Route path='/admin/*' element={<AdminPageRoute/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
    </Routes>
  )
}
