import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation panel', () => {
  render(<App />);
  const NavbarElement = screen.getByRole("nav");
  expect(NavbarElement).toBeInTheDocument();
});
