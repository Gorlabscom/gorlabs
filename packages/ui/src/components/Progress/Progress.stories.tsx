import { StoryFn, Meta } from '@storybook/react';
import { Progress } from './Progress';
import { useEffect, useState } from 'react';

const meta: Meta = {
  title: 'shadcn-ui/Progress',
  tags: ['autodocs'],
  component: Progress,
};

export default meta;

export const Default: StoryFn = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-[60%]" />;
};
