import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it("renders without crashing", () => {
  window.scrollTo = jest.fn()
})

test('renders homepage header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/homepage_heading/i);
  expect(linkElement).toBeInTheDocument();
});