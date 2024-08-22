import { StoryFn, Meta } from '@storybook/react';

import { Skeleton } from './Skeleton';

/**
 * An small example of loading an user avatar with Skeleton
 */
const meta: Meta = {
  title: 'shadcn-ui/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryFn = () => (
  <div className="flex items-center space-x-3">
    <div>
      <Skeleton className="w-16 h-16 rounded-full" />
    </div>
    <div>
      <p className="font-semibold text-lg">Gaurav Mandal</p>
      <small>Software Engineer</small>
    </div>
  </div>
);
