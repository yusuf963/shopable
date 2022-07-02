import { render, screen } from '@testing-library/react';
import {Shop} from './App';

test('renders learn react link', () => {
  render(<Shop />);
  const linkElement = screen.getByText(/for the text shop/i);
  expect(linkElement).toBeInTheDocument();
});
