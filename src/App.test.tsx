import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders the login dialog', () => {
  render(<App />);
  const dialogHeading = screen.getByText(
    /Welcome! Sign in with your JobCoin address/i
  );
  expect(dialogHeading).toBeInTheDocument();
});
