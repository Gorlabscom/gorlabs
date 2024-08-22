import { screen, render, fireEvent } from '@testing-library/react';

import { ToggleGroup, ToggleGroupItem } from './ToggleGroup';

describe('<Toggle />', () => {
  it('should renders component successfully', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>
    );
    const toggleA = screen.getByText('A');
    const toggleB = screen.getByText('B');

    expect(toggleA).toBeInTheDocument();
    expect(toggleA).toHaveClass('bg-transparent');

    fireEvent.click(toggleA);

    expect(toggleB).toBeInTheDocument();
    expect(toggleB).toHaveClass('bg-transparent');

    fireEvent.click(toggleB);

    expect(toggleA).toHaveClass('bg-transparent');
    expect(toggleB).toHaveClass('data-[state=on]:bg-accent');
  });
});
