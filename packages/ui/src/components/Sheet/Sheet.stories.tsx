import { StoryFn, Meta } from '@storybook/react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './Sheet';

const meta: Meta = {
  title: 'shadcn-ui/Sheet',
  tags: ['autodocs'],
  component: Sheet,
};

export default meta;

export const Default: StoryFn = () => (
  <Sheet>
    <SheetTrigger asChild>
      <button className="text-foreground">Open</button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);
