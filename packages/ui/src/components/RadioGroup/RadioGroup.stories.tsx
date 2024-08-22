import { StoryFn, Meta } from '@storybook/react';

import { RadioGroup, RadioGroupItem } from './RadioGroup';

const meta: Meta = {
  title: 'shadcn-ui/RadioGroup',
  tags: ['autodocs'],
  component: RadioGroup,
};

export default meta;

export const Default: StoryFn = () => (
  <RadioGroup defaultValue="comfortable">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="default" id="r1" />
      <label htmlFor="r1">Default</label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="comfortable" id="r2" />
      <label htmlFor="r2">Comfortable</label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="compact" id="r3" />
      <label htmlFor="r3">Compact</label>
    </div>
  </RadioGroup>
);
