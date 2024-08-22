import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog';

describe('<Dialog />', () => {
  it('should render component successfully', () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
        <DialogFooter>The Footer monster</DialogFooter>
      </Dialog>
    );

    const trigger = screen.getByText('Open');

    expect(trigger).toBeInTheDocument();

    fireEvent.click(trigger);

    const title = screen.getByText('Are you absolutely sure?');

    expect(title).toBeInTheDocument();
  });
});
