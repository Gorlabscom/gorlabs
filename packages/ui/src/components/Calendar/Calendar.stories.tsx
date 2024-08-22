import * as React from 'react';
import { DateRange } from 'react-day-picker';
import { StoryFn, Meta } from '@storybook/react';
import { Calendar } from './Calendar';

const meta: Meta = {
  title: 'shadcn-ui/Calendar',
  tags: ['autodocs'],
  component: Calendar,
};

export default meta;

export const Default: StoryFn = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
};

export const Range: StoryFn = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(1997, 11, 13),
    to: new Date(1997, 11, 20),
  });

  return (
    <Calendar
      mode="range"
      defaultMonth={new Date(1997, 11, 13)}
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
};
