import { screen, render } from '@testing-library/react';

import { Textarea } from './Textarea';

describe('<Textarea />', () => {
  it('should renders component successfully', () => {
    render(<Textarea placeholder="Name" />);
    const text = screen.getByPlaceholderText('Name');

    expect(text).toBeInTheDocument();
  });
});
