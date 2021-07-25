import { render, screen } from '@testing-library/react';
import MyResumeApp from '../MyResumeApp';

test('renders projects', () => {
  render(<MyResumeApp />);
  const projectsElement = screen.getByText(/PROJECT/i);
  expect(projectsElement).toBeInTheDocument();
});
