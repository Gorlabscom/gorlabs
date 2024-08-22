import { StoryFn, Meta } from '@storybook/react';
import { Input, InputMask } from './Input';

const meta: Meta = {
  title: 'shadcn-ui/Input',
  component: Input,
};

export default meta;

export const Default: StoryFn = () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
    <label
      htmlFor="email"
      aria-label="Email"
      className="text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Email
    </label>
    <Input type="email" id="email" placeholder="E-mail" />
  </div>
);

export const WithMask: StoryFn = () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
    <label
      htmlFor="birthdate"
      aria-label="Birthdate"
      className="text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Birthdate
    </label>
    <InputMask
      id="birthdate"
      placeholder="Date of Birth"
      format="####/##/##"
      mask="_"
      defaultValue="1997/12/13"
    />
  </div>
);
