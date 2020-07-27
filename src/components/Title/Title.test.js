import React from 'react';
import { render } from '@testing-library/react';
import Title from './Title';

test('Render <Title> component', () => {
  const text = "This is title"
  const { getByText } = render(<Title title={text} />);
  expect(getByText(text)).toBeInTheDocument()
});
