import { StoryFn, Meta } from '@storybook/react';

import { Alert, AlertDescription, AlertTitle } from './Alert';
import { Terminal } from 'lucide-react';

const meta: Meta = {
  title: 'shadcn-ui/Alert',
  component: Alert,
};

export default meta;

export const Default: StoryFn = () => (
  <Alert>
    <Terminal className="h-4 w-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      You can add components to your app using the cli.
    </AlertDescription>
  </Alert>
);

export const Destructive: StoryFn = () => (
  <Alert variant="destructive">
    <Terminal className="h-4 w-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      You can add components to your app using the cli.
    </AlertDescription>
  </Alert>
);
