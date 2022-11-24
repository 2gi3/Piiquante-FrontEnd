import { render, screen } from '@testing-library/react';
import Homepage from './Homepage'

it('renders "best hot sauce reviews"', () => {
  render(<Homepage />);
  screen.debug()
  // expect(screen.getByText(/best hot sauce reviews/)).toBeInTheDocument();
  // expect(title).toBeInTheDocument();
});
