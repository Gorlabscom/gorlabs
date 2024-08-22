import { StoryFn, Meta } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta: Meta = {
  title: 'shadcn-ui/Checkbox',
  component: Checkbox,
};

export default meta;

export const Default: StoryFn = () => (
  <div className="items-top flex space-x-2">
    <Checkbox id="terms1" aria-label="Accept terms and conditions" />
    <div className="grid gap-1.5 leading-none">
      <label
        htmlFor="terms1"
        aria-label="Accept terms and conditions"
        className="text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
      <p className="text-sm text-muted-foreground">
        You agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  </div>
);
