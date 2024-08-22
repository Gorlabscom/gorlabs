import { render, screen, waitFor, act } from '@testing-library/react';
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './Tooltip';
import userEvent from '@testing-library/user-event';

describe('<Tooltip />', () => {
  it('renders component successfully', () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent>
            <p>Hey</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    const text = screen.getByText('Hover');

    expect(text).toBeInTheDocument();
  });

  it('should display tooltip message on <div /> mouseover', async () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
            <TooltipArrow />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    const button = screen.getByText('Hover');

    await act(() => userEvent.hover(button));

    await waitFor(() =>
      expect(button).toHaveAttribute('data-state', 'delayed-open')
    );
  });
});
