import { render, screen } from '@testing-library/react';
import { Skeleton } from './Skeleton';

describe('<Skeleton />', () => {
  it('should render a loading indicator', () => {
    render(<Skeleton data-testid="loading-indicator" />);

    const button = screen.getByTestId('loading-indicator');

    expect(button).toBeInTheDocument();
  });
});
