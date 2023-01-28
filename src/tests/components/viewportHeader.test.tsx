import { render, screen } from '@testing-library/react';
import React from 'react'
import ViewportHeader from '../../components/viewPortHeader/viewportHeader';

describe('viewport header renders correctly', () => {

    it('should render correctly', () => {
      render(<ViewportHeader text="test page"/>)

      const headerText = screen.getByRole('heading')

      expect(headerText).toBeInTheDocument()
      expect(headerText).toHaveTextContent('test page')
      
    });});