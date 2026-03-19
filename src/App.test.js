import { render, screen } from '@testing-library/react';
import App from './App';

test('affiche le titre de lapplication', () => {
  render(<App />);
  const titreElement = screen.getByText(/Application React/i);
  expect(titreElement).toBeInTheDocument();
});