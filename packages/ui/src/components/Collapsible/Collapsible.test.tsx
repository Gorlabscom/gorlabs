import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './Collapsible';

describe('<Collapsible />', () => {
  it('should render component successfully', () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
        <CollapsibleContent>
          Yes. Free to use for personal and commercial projects. No attribution
          required.
        </CollapsibleContent>
      </Collapsible>
    );

    const title = screen.getByText('Can I use this in my project?');

    expect(title).toBeInTheDocument();

    expect(title).toHaveAttribute('data-state', 'closed');

    fireEvent.click(title);

    expect(title).toHaveAttribute('data-state', 'open');
  });
});
