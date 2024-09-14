import { render, screen } from '@testing-library/react';
import { Episodes } from './Episodes';

describe('<Episodes />', () => {
  it('should render with initial content', () => {
    render(<Episodes showId={0} />);

    expect(screen.getByText('Seasons & episodes')).toBeInTheDocument();
    expect(screen.getByText('There is no information available')).toBeInTheDocument();
  });
});
