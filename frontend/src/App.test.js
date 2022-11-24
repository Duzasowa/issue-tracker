import { render, screen } from '@testing-library/react';
import HomeScreen from './screens/HomeScreen';

test('Renders learn react link', () => {
  render(<HomeScreen />);
  const linkElement = screen.getByText('Name')
  expect(linkElement).toBeInTheDocument();
});