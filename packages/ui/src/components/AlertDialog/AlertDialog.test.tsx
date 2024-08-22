import { screen, render } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import {
  AlertDialog,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './AlertDialog';

describe('<AlertDialog />', () => {
  it('should renders component successfully', () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger className="text-foreground">
          Open
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );

    const trigger = screen.getByText('Open');
    expect(trigger).toBeInTheDocument();

    fireEvent.click(trigger);

    const title = screen.getByText('Are you absolutely sure?');
    const cancel = screen.getByText('Cancel');

    expect(title).toBeInTheDocument();

    fireEvent.click(cancel);

    expect(title).not.toBeInTheDocument();
  });
});
