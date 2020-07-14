import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it("renders without crashing", () => {
  window.scrollTo = jest.fn();

  const div = document.createElement('div');
  
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
})

test('renders homepage header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/homepage_heading/i);

  expect(linkElement).toBeInTheDocument();
});