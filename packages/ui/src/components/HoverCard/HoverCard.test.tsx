import { act, render, screen, waitFor } from '@testing-library/react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './HoverCard';
import userEvent from '@testing-library/user-event';

describe('<HoverCard />', () => {
  it('should render component successfully', async () => {
    render(
      <HoverCard>
        <HoverCardTrigger>Open</HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@gorlabs</h4>
              <p className="text-sm">
                The React Framework – created and maintained by @vercel.
              </p>
              <div className="flex items-center pt-2">
                <span className="text-xs text-muted-foreground">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    );

    const trigger = screen.getByText('Open');

    expect(trigger).toBeInTheDocument();

    await act(() => userEvent.hover(trigger));

    await waitFor(() =>
      expect(screen.getByText('@gorlabs')).toBeInTheDocument()
    );
  });
});
