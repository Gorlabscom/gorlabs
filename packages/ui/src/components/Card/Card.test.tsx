import { render, screen } from '@testing-library/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './Card';

describe('<Card />', () => {
  it('should render component successfully', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    );

    const title = screen.getByText('Card Title');
    const description = screen.getByText('Card Description');
    const content = screen.getByText('Card Content');
    const footer = screen.getByText('Card Footer');

    expect(title).toBeInTheDocument();

    expect(description).toBeInTheDocument();

    expect(content).toBeInTheDocument();

    expect(footer).toBeInTheDocument();

    expect(title).toHaveClass(
      'text-2xl font-semibold leading-none tracking-tight'
    );
    expect(description).toHaveClass('text-sm text-muted-foreground');
  });
});
