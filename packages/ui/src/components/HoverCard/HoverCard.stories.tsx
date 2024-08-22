import { StoryFn, Meta } from '@storybook/react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './HoverCard';
import { CalendarDays } from 'lucide-react';

const meta: Meta = {
  title: 'shadcn-ui/HoverCard',
  tags: ['autodocs'],
  component: HoverCard,
};

export default meta;

export const Default: StoryFn = () => (
  <div className="flex justify-center">
    <HoverCard>
      <HoverCardTrigger>Open</HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{' '}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  </div>
);
