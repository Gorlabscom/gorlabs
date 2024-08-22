import { screen, render, fireEvent } from '@testing-library/react';

import { Toggle } from './Toggle';

describe('<Toggle />', () => {
  it('should renders component successfully', () => {
    render(<Toggle>B</Toggle>);
    const toggle = screen.getByText('B');

    expect(toggle).toBeInTheDocument();
    expect(toggle).toHaveClass('bg-transparent');

    fireEvent.click(toggle);

    expect(toggle).toHaveClass('data-[state=on]:bg-accent');
  });
});
