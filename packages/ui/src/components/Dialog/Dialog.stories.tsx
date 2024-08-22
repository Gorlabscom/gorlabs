import { StoryFn, Meta } from '@storybook/react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog';

const meta: Meta = {
  title: 'shadcn-ui/Dialog',
  tags: ['autodocs'],
  component: Dialog,
};

export default meta;

export const Default: StoryFn = () => (
  <Dialog>
    <DialogTrigger className="text-foreground">Open</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);
