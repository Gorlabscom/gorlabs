import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('<Badge />', () => {
  it('should render component successfully', () => {
    render(<Badge>Badge</Badge>);

    const badge = screen.getByText('Badge');

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass(
      'border-transparent bg-primary text-primary-foreground hover:bg-primary/80'
    );
  });
});
