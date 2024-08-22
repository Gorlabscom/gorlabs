import { fireEvent, render, screen } from '@testing-library/react';
import { Switch } from './Switch';

describe('<Switch />', () => {
  it('should render a switch', () => {
    render(
      <div className="ml-10">
        <Switch data-testid="switch" />
      </div>
    );

    const button = screen.getByTestId('switch');

    expect(button).toBeInTheDocument();
  });

  it('should render a switch and fire function when changed', () => {
    const change = jest.fn();

    render(
      <div className="ml-10">
        <Switch onCheckedChange={change} data-testid="switch" />
      </div>
    );

    const button = screen.getByTestId('switch');

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(change).toHaveBeenCalled();
  });
});
