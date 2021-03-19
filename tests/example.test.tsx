import React from 'react';
import { render } from '@testing-library/react';
import { Example } from '../src';

describe('<Example />', () => {
  it('renders', () => {
    render(<Example message="World!" />);
  });
});
