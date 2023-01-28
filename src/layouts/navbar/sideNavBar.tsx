import React from 'react'
import NavItem from '../../components/navItem/navItem'
import './sideNavBar.scss'
import { FiMessageSquare,FiUsers, FiSend } from 'react-icons/fi';
import { BiGridAlt } from 'react-icons/bi';
import { MdOutlineInventory } from 'react-icons/md';
import { AiOutlineSetting, AiOutlineDollar } from 'react-icons/ai';
import { RiAccountPinCircleLine, RiInformationLine } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';
import { VscGraph } from 'react-icons/vsc';




export default function SideNavBar(): JSX.Element {
  /* contains the navigation items of the navigation bar */
  return (
    <div className='side-nav-container'>
      <div className='side-nav-container-items'>
        <NavItem text='Dashboard' to="/admin">
          <BiGridAlt />
        </NavItem>
        <NavItem text='Inventory' to='/admin/inventory'>
          <MdOutlineInventory/>
        </NavItem>
        {/* <NavItem text='Messages' to='/admin/messages'>
          <FiMessageSquare/>
        </NavItem> */}
        <NavItem text='Users' to='/admin/distributors'>
          <FiUsers/>
        </NavItem>
        <NavItem text='Settings'  to='/admin/settings'>
          <AiOutlineSetting/>
        </NavItem>
        <NavItem text='Orders' to='/admin/salesTeam'>
          <RiAccountPinCircleLine/>
        </NavItem>
        {/* <NavItem text='Fleet' to='/admin/fleet'>
          <TbTruckDelivery/>
        </NavItem> */}
        <NavItem text='Payments' to='/admin/payments'>
          <AiOutlineDollar/>
        </NavItem>
        {/* <NavItem text='Promotions' to='/admin/promotions'>
          <FiSend/>
        </NavItem> */}
        <NavItem text='Reports' to='/admin/reports'>
          <VscGraph/>
        </NavItem>
      </div>
      <div className='side-nav-container-footer'>
        <NavItem text='Help' to='#'>
          <RiInformationLine/>
        </NavItem>
      </div>
    </div>
  )
}
