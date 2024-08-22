import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './Sheet';

describe('<Sheet />', () => {
  it('should render component successfully', async () => {
    render(
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
        <SheetFooter>
          <p>Hello from footer</p>
        </SheetFooter>
      </Sheet>
    );

    const trigger = screen.getByText('Open');

    expect(trigger).toBeInTheDocument();

    fireEvent.click(trigger);

    await waitFor(() =>
      expect(screen.getByText('Edit profile')).toBeInTheDocument()
    );
  });
});
