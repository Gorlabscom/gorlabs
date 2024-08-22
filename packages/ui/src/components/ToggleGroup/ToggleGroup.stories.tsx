import { StoryFn, Meta } from '@storybook/react';
import { ToggleGroup, ToggleGroupItem } from './ToggleGroup';
import { Bold, Italic, Underline } from 'lucide-react';

const meta: Meta = {
  title: 'shadcn-ui/ToggleGroup',
  component: ToggleGroup,
};

export default meta;

export const Default: StoryFn = () => {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};
