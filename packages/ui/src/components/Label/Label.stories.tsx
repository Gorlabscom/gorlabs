import { StoryFn, Meta } from '@storybook/react';

import { Label } from './Label';

const meta: Meta = {
  title: 'shadcn-ui/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Label text',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

export const Default: StoryFn = (args) => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="email" {...args} />
  </div>
);

Default.args = {
  children: 'Email',
};
