import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';

describe('<Popover />', () => {
  it('should render component successfully', () => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    );

    const trigger = screen.getByText('Open');

    expect(trigger).toBeInTheDocument();

    fireEvent.click(trigger);

    const content = screen.getByText('Place content for the popover here.');

    expect(content).toBeInTheDocument();
  });
});
