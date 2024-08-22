import { StoryFn, Meta } from '@storybook/react';
import { Switch } from './Switch';
import { useState } from 'react';

const meta: Meta = {
  title: 'shadcn-ui/Switch',
  component: Switch,
};

export default meta;

export const Default: StoryFn = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={active}
        onCheckedChange={setActive}
        id="super-saiyan-mode"
        aria-label="Super Saiyan mode"
      />
      <label
        htmlFor="super-saiyan-mode"
        aria-label="Super Saiyan"
        className="text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Super Saiyan
      </label>
    </div>
  );
};
