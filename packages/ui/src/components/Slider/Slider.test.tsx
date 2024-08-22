import { render, screen } from '@testing-library/react';
import { Slider } from './Slider';

describe('<Slider />', () => {
  it('should change value when using keyboard events', () => {
    render(<Slider defaultValue={[50]} max={100} step={1} />);

    const slider = screen.getByRole('slider');

    expect(slider).toHaveAttribute('aria-valuenow', '50');
  });
});
