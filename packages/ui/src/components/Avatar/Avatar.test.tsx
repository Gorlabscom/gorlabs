import { render, screen } from '@testing-library/react';
import { Avatar, AvatarFallback, AvatarImage } from './Avatar';

describe('<Avatar />', () => {
  it('should render component successfully', () => {
    render(
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    );

    const text = screen.getByText('CN');

    expect(text).toBeInTheDocument();
  });
});
