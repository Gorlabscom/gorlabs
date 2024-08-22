import { StoryFn, Meta } from '@storybook/react';
import { Badge, BadgeProps } from './Badge';

const meta: Meta = {
  title: 'shadcn-ui/Badge',
  tags: ['autodocs'],
  component: Badge,
};

export default meta;

export const Default: StoryFn = () => <Badge>Badge</Badge>;

export const Secondary: StoryFn<BadgeProps> = (args) => (
  <Badge {...args}>Badge</Badge>
);

Secondary.args = {
  variant: 'secondary',
};

export const Destructive: StoryFn<BadgeProps> = (args) => (
  <Badge {...args}>Badge</Badge>
);

Destructive.args = {
  variant: 'destructive',
};

export const Outline: StoryFn<BadgeProps> = (args) => (
  <Badge {...args}>Badge</Badge>
);

Outline.args = {
  variant: 'outline',
};
