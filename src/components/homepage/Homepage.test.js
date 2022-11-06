import { render, screen } from '@testing-library/react';
import Homepage from './Homepage'

it('renders "The sauces"', () => {
  render(<Homepage />);
  expect(screen.getByText('The sauces')).toBeInTheDocument();
  // expect(title).toBeInTheDocument();
});
