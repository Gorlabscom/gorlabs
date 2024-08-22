import { screen, render } from '@testing-library/react';

import { Alert, AlertDescription, AlertTitle } from './Alert';

describe('<Alert />', () => {
  it('should renders component successfully', () => {
    render(
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    );

    const title = screen.getByText('Heads up!');
    const description = screen.getByText(
      'You can add components to your app using the cli.'
    );

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
