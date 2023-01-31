import { describe, it, expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

const updateFieldCouldNotBeEmpty = () => {
  if(editTodo.text === null) {
    throw new Error("Invalid Input - must not be empty!")
  }
}

const inputFieldCouldNotBeEmpty = () => {
  if(todo.text === null) {
    throw new Error("Invalid Input - must not be empty!")
  }
}

afterEach(() => cleanup());

describe('Input Validations', () => {
  it("Should throw an error, if an empty value is provided in update todo field", () => {
    const input = "";
    const validationFn = () => updateFieldCouldNotBeEmpty(input);
    expect(validationFn).toThrow()
  })

  it("Should throw an error, if an empty value is provided in add todo field", () => {
    const input = "";
    const validationFn = () => inputFieldCouldNotBeEmpty(input);
    expect(validationFn).toThrow()
  })
 });
