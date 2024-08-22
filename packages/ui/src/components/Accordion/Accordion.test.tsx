import { screen, render } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './Accordion';

describe('<Accordion />', () => {
  it('should renders component successfully', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByText('Is it accessible?');
    expect(trigger).toBeInTheDocument();

    fireEvent.click(trigger);

    const content = screen.getByText(
      'Yes. It adheres to the WAI-ARIA design pattern.'
    );

    expect(content).toBeInTheDocument();
  });
});
