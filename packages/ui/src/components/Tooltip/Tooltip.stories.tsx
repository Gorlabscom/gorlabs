import { StoryFn, Meta } from '@storybook/react';
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './Tooltip';

const meta: Meta = {
  title: 'shadcn-ui/Tooltip',
  component: Tooltip,
};

export default meta;

export const Default: StoryFn = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover</TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const WithArrow: StoryFn = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Legolas</TooltipTrigger>
        <TooltipContent>
          <p>Look the arrow</p>
          <TooltipArrow />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
