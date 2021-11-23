import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import  TextShower from './index';

const setup = () => {
  const utils = render(<TextShower />)
  const input = utils.getByLabelText('kappa')
  const text = utils.getByLabelText('test div')
  return {
    input,
    text,
    ...utils,
  }
}

test('test TextShower', () => {
  const {input,text}:any = setup()
  expect(input.checked).toBe(true)
  expect(text).toBeTruthy()

  fireEvent.click(input.checked)
  expect(input.checked).toBe(false)
  expect(text).toBeFalsy()
});

