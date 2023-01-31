import { describe, it, expect, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(() => cleanup());

describe('App', () => {
  it('should render the title', () => {
    render(<App />);
    expect(screen.getByText('Lista de Afazeres'));
  });

  it('should have the input label', () => {
    render(<App />);
    expect(screen.getByLabelText("Tarefa"));
  });

  it('should have a button', () => {
    render(<App />);
    expect(screen.getByText("Adicionar"));
  });
});
