import { render, screen, fireEvent } from '@testing-library/react';
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

test('test that new-item-button is a button', () => {
  render(<App/>, container);
  const element = screen.getByTestId('new-item-button');
  expect(element.outerHTML.toLowerCase().includes("button")).toBe(true)
});

test('test that new-item-input is an input ', () => {
  render(<App/>, container);
  const element = screen.getByTestId('new-item-input');
  expect(element.outerHTML.toLowerCase().includes("input")).toBe(true)
});

test('test that App component doesn\'t render duplicate Task', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i})
  const inputDate = screen.getByPlaceholderText("mm/dd/yyyy")
  const element = screen.getByRole('button', {name: /Add/i}) ;
  fireEvent.change(inputTask, { target: { value: "History Test"}})
  fireEvent.change(inputDate, { target: { value: "05/30/2023"}})
  fireEvent.click(element)
  fireEvent.change(inputTask, { target: { value: "History Test"}})
  fireEvent.change(inputDate, { target: { value: "05/30/2024"}})
  fireEvent.click(element)
  const check = screen.getAllByText(/Test/i)
  expect(check.length).toBe(1);
 });

 test('test that App component doesn\'t add a task without due date', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i})
  const element = screen.getByRole('button', {name: /Add/i}) ;
  fireEvent.change(inputTask, { target: { value: "History Test"}})
  fireEvent.click(element)
  const check = screen.getByText(/You have no todo's left/i)
  expect(check).toBeInTheDocument();
 });

 test('test that App component doesn\'t add a task without task name', () => {
  render(<App />);
  const inputDate = screen.getByPlaceholderText("mm/dd/yyyy")
  const element = screen.getByRole('button', {name: /Add/i}) ;
  fireEvent.change(inputDate, { target: { value: "05/30/2023"}})
  fireEvent.click(element)
  const check = screen.getByText(/You have no todo's left/i)
  expect(check).toBeInTheDocument();
 });	

 test('test that App component renders different colors for past due events', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i})
  const inputDate = screen.getByPlaceholderText("mm/dd/yyyy")
  const element = screen.getByRole('button', {name: /Add/i}) ;
  fireEvent.change(inputTask, { target: { value: "History Test"}})
  fireEvent.change(inputDate, { target: { value: "06/16/2024"}})
  fireEvent.click(element)
  fireEvent.change(inputTask, { target: { value: "Math Test"}})
  fireEvent.change(inputDate, { target: { value: "06/16/2023"}})
  fireEvent.click(element)
  const historyCheck = screen.getByTestId(/History Test/i).style.background
  const mathCheck = screen.getByTestId(/Math Test/i).style.background
  expect(mathCheck == historyCheck).toBe(false);
});

test('test that App component can be deleted thru checkbox', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i})
  const inputDate = screen.getByPlaceholderText("mm/dd/yyyy")
  const element = screen.getByRole('button', {name: /Add/i}) ;
  fireEvent.change(inputTask, { target: { value: "History Test"}})
  fireEvent.change(inputDate, { target: { value: "05/30/2023"}})
  fireEvent.click(element)
  const checkTask = screen.getByRole('checkbox')
  fireEvent.click(checkTask)
  const check = screen.getByText(/You have no todo's left/i)
  expect(check).toBeInTheDocument();
 });