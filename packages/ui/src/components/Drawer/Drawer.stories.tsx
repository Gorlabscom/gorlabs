import { StoryFn, Meta } from '@storybook/react';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './Drawer';

const meta: Meta = {
  title: 'shadcn-ui/Drawer',
  tags: ['autodocs'],
  component: Drawer,
};

export default meta;

export const Default: StoryFn = () => (
  <Drawer>
    <DrawerTrigger>Open</DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
        <DrawerDescription>This action cannot be undone.</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <button>Submit</button>
        <DrawerClose>
          <button>Cancel</button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);
