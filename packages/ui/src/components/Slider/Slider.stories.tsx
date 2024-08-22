import { StoryFn, Meta } from '@storybook/react';

import { Slider } from './Slider';

const meta: Meta = {
  title: 'shadcn-ui/Slider',
  tags: ['autodocs'],
  component: Slider,
};

export default meta;

export const Default: StoryFn = () => (
  <Slider defaultValue={[50]} max={100} step={1} />
);
