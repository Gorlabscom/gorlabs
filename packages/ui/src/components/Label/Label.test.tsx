import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('<Label />', () => {
  it('should render component label successfully', () => {
    render(<Label id="terms1"> Gaurav Mandal</Label>);
    const text = screen.getByText('Gaurav Mandal');

    expect(text).toBeInTheDocument();
  });
});
