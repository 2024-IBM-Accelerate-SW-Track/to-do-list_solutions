import { render, screen } from '@testing-library/react';
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

test('test that App component renders', () => {
  render(<App />, container);
 });

test('test that we have an Add button', () => {
  render(<App/>, container);
  const element = screen.getByRole('button', {name: /Add/i});
  expect(element).toBeInTheDocument();
});

test('test that there is an input field for task names', () => {
  render(<App/>, container);
  const element = screen.getByRole('textbox', {name: /Add New Item/i});
  expect(element).toBeInTheDocument();
});

test('test that there is an input field for due dates', () => {
  render(<App/>, container);
  const element = screen.getByPlaceholderText("mm/dd/yyyy");
  expect(element).toBeInTheDocument();
});

test('test for no tasks text', () => {
  render(<App/>, container);
  const check = screen.getByText(/You have no todo's left/i)
  expect(check).toBeInTheDocument();
});
