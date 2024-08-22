import { render, screen } from '@testing-library/react';
import { Progress } from './Progress';

describe('<Progress />', () => {
  it('should render component successfully', () => {
    render(<Progress value={0} className="w-[60%]" />);

    const progress = screen.getByRole('progressbar');

    expect(progress).toBeInTheDocument();
  });
});
