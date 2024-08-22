import { render, screen, waitFor } from '@testing-library/react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from './InputOTP';

describe('<InputOTP />', () => {
  it('should render component successfully', async () => {
    render(
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot autoFocus index={0} data-testid="first-slot" />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
    );

    const input = screen.getByRole('textbox');

    const slot = screen.getByTestId('first-slot');

    expect(input).toBeInTheDocument();
    expect(slot).toBeInTheDocument();

    await waitFor(() =>
      expect(slot).toHaveClass('relative flex h-10 w-10 items-center')
    );
  });
});
