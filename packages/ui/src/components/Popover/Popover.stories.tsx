import { StoryFn, Meta } from '@storybook/react';

import { Popover, PopoverContent, PopoverTrigger } from './Popover';

const meta: Meta = {
  title: 'shadcn-ui/Popover',
  tags: ['autodocs'],
  component: Popover,
};

export default meta;

export const Default: StoryFn = () => (
  <div className="flex justify-center">
    <Popover>
      <PopoverTrigger className="text-foreground">Open</PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  </div>
);
