import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

describe('<Table />', () => {
  it('renders component successfully', async () => {
    render(
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">FIRST - Account</TabsTrigger>
          <TabsTrigger value="password">SECOND - Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    );

    const passwordTrigger = screen.getByText('SECOND - Password');

    const accountContent = screen.getByText(
      'Make changes to your account here.'
    );

    expect(passwordTrigger).toBeInTheDocument();
    expect(accountContent).toBeInTheDocument();

    userEvent.click(passwordTrigger);

    await waitFor(() =>
      expect(screen.getByText('Change your password here.')).toBeInTheDocument()
    );
  });
});
