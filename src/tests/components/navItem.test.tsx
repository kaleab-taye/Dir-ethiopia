import {  render, screen } from '@testing-library/react';
import React from 'react'
import NavItem from '../../components/navItem/navItem';
import { BrowserRouter } from 'react-router-dom';


describe('nav item component renders correctly', () => {

    it('should render correctly', () => {

        const navItem = <BrowserRouter><NavItem location={{pathname : '/'}} text='test nav' to='/test-destination'><div>test nav</div></NavItem></BrowserRouter>
        render(navItem)
        const renderedItem = screen.getByRole('nav-link')
        expect(renderedItem).toBeInTheDocument()
      
    });});