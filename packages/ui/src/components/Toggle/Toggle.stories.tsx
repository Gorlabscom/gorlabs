import { StoryFn, Meta } from '@storybook/react';
import { Toggle } from './Toggle';
import { Bold } from 'lucide-react';

const meta: Meta = {
  title: 'shadcn-ui/Toggle',
  component: Toggle,
};

export default meta;

export const Default: StoryFn = () => {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  );
};
