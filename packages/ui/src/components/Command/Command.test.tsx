import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from 'lucide-react';

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from './Command';
import { DialogDescription, DialogTitle } from '../Dialog/Dialog';

window.HTMLElement.prototype.scrollIntoView = function () {};

describe('<Command />', () => {
  it('should render component successfully', () => {
    render(
      <Command className="rounded-lg border shadow-md">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator className="mr-2 h-4 w-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );

    const input = screen.getByPlaceholderText('Type a command or search...');

    const calendar = screen.getByText('Calendar');

    expect(input).toBeInTheDocument();
    expect(calendar).toBeInTheDocument();

    fireEvent.change(input, {
      target: {
        value: 'Billing',
      },
    });

    expect(calendar).not.toBeInTheDocument();

    const billing = screen.getByText('Billing');

    expect(billing).toBeInTheDocument();
  });

  it('should renders command successfully using dialog', () => {
    render(
      <CommandDialog open>
        <DialogTitle>Only to fix a11y error</DialogTitle>
        <DialogDescription>
          Another component only to fix ally error
        </DialogDescription>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList aria-describedby="command list">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator className="mr-2 h-4 w-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    );

    const input = screen.getByPlaceholderText('Type a command or search...');

    const calendar = screen.getByText('Calendar');

    expect(input).toBeInTheDocument();
    expect(calendar).toBeInTheDocument();

    fireEvent.change(input, {
      target: {
        value: 'Billing',
      },
    });

    expect(calendar).not.toBeInTheDocument();

    const billing = screen.getByText('Billing');

    expect(billing).toBeInTheDocument();
  });
});
