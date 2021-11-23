import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './index';

test('renders learn react link', () => {
  render(<Card />);
  const CardText = screen.getByText(/Test text/i);
  expect(CardText).toBeInTheDocument();
});