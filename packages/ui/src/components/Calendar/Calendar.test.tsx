import { render, screen } from '@testing-library/react';
import { Calendar } from './Calendar';

describe('<Calendar />', () => {
  it('should render component successfully', () => {
    render(
      <Calendar
        selected={new Date(2023, 5, 5)}
        month={new Date(2023, 5, 5)}
        mode="single"
      />
    );
    const text = screen.getByText('June 2023');

    expect(text).toBeInTheDocument();
  });

  it('should renders component successfully with mode range', () => {
    render(
      <Calendar
        selected={{
          from: new Date(2023, 5, 5),
          to: new Date(2023, 5, 10),
        }}
        month={new Date(2023, 5, 5)}
        mode="range"
      />
    );
    const text = screen.getByText('June 2023');

    expect(text).toBeInTheDocument();
  });
});
