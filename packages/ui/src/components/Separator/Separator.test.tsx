import { render, screen } from '@testing-library/react';
import { Separator } from './Separator';

describe('<Separator />', () => {
  it('should render component successfully', () => {
    render(
      <div>
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
          <p className="text-sm text-muted-foreground">
            An open-source UI component library.
          </p>
        </div>
        <Separator className="my-4" data-testid="horizontal-separator" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    );

    const separator = screen.getByTestId('horizontal-separator');

    expect(separator).toBeInTheDocument();
  });
});
