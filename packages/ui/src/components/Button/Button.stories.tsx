import { StoryFn, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

/**
 * These stories showcase the button
 */
const meta: Meta<ButtonProps> = {
  title: 'shadcn-ui/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'That shows the 6 variant types',
      options: [
        'default',
        'secondary',
        'outline',
        'destructive',
        'ghost',
        'link',
      ],
      control: {
        type: 'radio',
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
  component: Button,
};

export default meta;

export const Default: StoryFn<ButtonProps> = (args) => <Button {...args} />;

Default.args = {
  variant: 'default',
  children: 'Hello Gorlabs',
};

export const FullWidth: StoryFn<ButtonProps> = (args) => (
  <div>
    <Button {...args} className="w-full" />
  </div>
);

FullWidth.args = {
  variant: 'default',
  children: 'Full Width Button',
};

export const Disabled: StoryFn<ButtonProps> = (args) => (
  <div className="grid grid-cols-6 gap-6">
    <Button {...args} className="w-full" />
  </div>
);

Disabled.args = {
  variant: 'default',
  children: 'Hello Gorlabs',
  disabled: true,
};

export const Destructive: StoryFn<ButtonProps> = (args) => (
  <div className="grid grid-cols-6 gap-6">
    <Button {...args} className="w-full" />
  </div>
);

Destructive.args = {
  variant: 'destructive',
  children: 'Hello Gorlabs',
};
