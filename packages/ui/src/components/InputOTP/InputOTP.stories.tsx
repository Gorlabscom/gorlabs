import { StoryFn, Meta } from '@storybook/react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from './InputOTP';

const meta: Meta = {
  title: 'shadcn-ui/InputOTP',
  tags: ['autodocs'],
  component: InputOTP,
};

export default meta;

export const Default: StoryFn = () => (
  <div className="flex justify-center">
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot autoFocus index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  </div>
);
