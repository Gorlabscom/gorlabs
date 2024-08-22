import { fireEvent, render, screen } from '@testing-library/react';
import { RadioGroup, RadioGroupItem } from './RadioGroup';

describe('<RadioGroup />', () => {
  it('should render component successfully', () => {
    render(
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <label htmlFor="r1">Default</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <label htmlFor="r2">Comfortable</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <label htmlFor="r3">Compact</label>
        </div>
      </RadioGroup>
    );

    const compact = screen.getByRole('radio', {
      name: /Compact/,
    });

    expect(compact).toBeInTheDocument();

    fireEvent.click(compact);

    expect(compact).toHaveAttribute('data-state', 'checked');
  });
});
