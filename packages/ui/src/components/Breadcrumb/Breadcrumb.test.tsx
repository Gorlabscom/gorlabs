import { render, screen } from '@testing-library/react';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './Breadcrumb';

describe('<Breadcrumb />', () => {
  it('should render component successfully', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <p>Slot</p>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );

    const page = screen.getByText('Breadcrumb');
    const link = screen.getByText('Home');
    const slot = screen.getByText('Slot');

    expect(page).toBeInTheDocument();

    expect(link).toBeInTheDocument();

    expect(slot.tagName).toBe('P');

    expect(page).toHaveClass('font-normal text-foreground');

    expect(link).toHaveClass('transition-colors hover:text-foreground');
  });
});
