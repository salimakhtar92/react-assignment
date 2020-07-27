import React from 'react';
import { render } from '@testing-library/react';
import SubTitle from './SubTitle';

test('Render <SubTitle> component', () => {
  const text = "This is title"
  const { getByText } = render(<SubTitle subTitle={text} />);
  expect(getByText(text)).toBeInTheDocument()
});