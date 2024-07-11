import { render, screen} from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


test('test that we have an Add button', () => {
  render(<App/>);
  const element = screen.getByRole('button', {name: /Add/i});
  expect(element).toBeInTheDocument();
});

test('test that there is an input field for task names', () => {
  render(<App/>);
  const element = screen.getByRole('textbox', {name: /Add New Item/i});
  expect(element).toBeInTheDocument();
});

test('test for no tasks text', () => {
  render(<App/>);
  const check = screen.getByText(/You have no todo's left/i)
  expect(check).toBeInTheDocument();
});
