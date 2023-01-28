import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../../views/dashboard/dashboard'
import Inventory from '../../views/inventory/inventory'
import Messages from '../../views/messages/messages'
import Distributors from '../../views/distributors/distributors'
import Settings from '../../views/settings/settings'
import SalesTeam from '../../views/salesTeam/settings'
import Fleet from '../../views/fleet/fleet'
import Payments from '../../views/payments/payments'
import Promotions from '../../views/promotions/promotions'
import Reports from '../../views/reports/reports'
import PageNotFound from '../../components/pageNotFound/pageNotFound'
import AdminPage from '../../layouts/adminPageLayout/adminPageLayout'
// import AdminPage from '../../views/adminPageLayout/adminPage'



export default function AdminPageRoute():JSX.Element {
  /* contains the routing for the admin pages */
  return (
            <Routes>
              <Route element={<AdminPage/>}>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='inventory' element={<Inventory/>}/>
                <Route path='messages' element={<Messages/>}/>
                <Route path='distributors' element={<Distributors/>}/>
                <Route path='settings' element={<Settings/>}/>
                <Route path='salesTeam' element={<SalesTeam/>}/>
                <Route path='fleet' element={<Fleet/>}/>
                <Route path='payments' element={<Payments/>}/>
                <Route path='promotions' element={<Promotions/>}/>
                <Route path='reports' element={<Reports/>}/>
                <Route path='*' element={<PageNotFound/>}/>
              </Route>
            </Routes>
          
  )
}
