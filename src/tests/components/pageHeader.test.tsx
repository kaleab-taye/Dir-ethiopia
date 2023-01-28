import {  render, screen } from '@testing-library/react';
import React from 'react'
import { PageHeader } from '../../layouts/pageHeader/pageHeader';

describe('page header renders correctly', () => {

    it('should render correctly', () => {
      render(<PageHeader/>)

      const headerText = screen.getByRole('brand-identity')

      expect(headerText).toBeInTheDocument()
      
    });});