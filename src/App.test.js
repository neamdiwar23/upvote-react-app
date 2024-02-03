import { render, screen } from '@testing-library/react';
import App from './App.js'

test("render landing page", () => {
  render(<App />);
  expect(screen.getByRole("heading")).toHaveTextContent(/Upvote React App/i);
});