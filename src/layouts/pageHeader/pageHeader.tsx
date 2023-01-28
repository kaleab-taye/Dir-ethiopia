import React from 'react'
import './pageHeader.scss'
import IconStyler from '../../components/iconStyler/iconStyler'
import { FiSearch } from 'react-icons/fi'
import { FaBell } from 'react-icons/fa'
import NavDrawer from '../navDrawer/navDrawer'

export function PageHeader(): JSX.Element{
    /* contains the company brand logo and other functionalities (is the header for the entire admin page) */
    return (
        <div className='page-header'>
            <div className='page-header-smallScreenNavToggler'>
                <NavDrawer/>
            </div>
            <div role='brand-identity' className='page-header-text'>
                Dir Ethiopia
            </div>
            <div className='page-header-icons'>
                <div className='page-header-icons-search'>
                        <IconStyler>
                            <FiSearch/>
                        </IconStyler>
                </div>
                <IconStyler className='page-header-icons-bell'>
                    <FaBell/>
                </IconStyler>
                <div>

                </div>
                
            </div>
        </div>
    )
}