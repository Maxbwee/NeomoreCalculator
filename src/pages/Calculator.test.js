import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';


// fireEvent function allows the simulation of events on DOM elements.
// It has various different methods to simulate user interactions.

test('Test to render the calculator component succesfully', () => {
  render(<Calculator />);
  // Verifys that a button will be rendered on screen
  expect(screen.getByText('1')).toBeInTheDocument();
});

test('Test to handle a button being clicked correctly', () => {
  render(<Calculator />);
  // Simulates the user clicking on a button. In this case a user clicks the "1" button
  const oneButton = screen.getByText('1');
  const resultInput = screen.getByLabelText('Result');
  
  fireEvent.click(oneButton);
  expect(resultInput.value).toBe('1');
});

test('Test to handle the result of a calculation correclty', () => {
  render(<Calculator />);
  const inputField = screen.getByLabelText('Result');

  fireEvent.change(inputField, {target : { value: '3+2'} });
  fireEvent.click(screen.getByText('='));

  expect(inputField.value).toBe('5');
})