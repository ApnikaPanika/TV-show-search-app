import { render, screen } from '@testing-library/react';
import SearchResults from './SearchResults';

describe('<SearchResults />', () => {
  it('should render with initial content', () => {
    render(<SearchResults />);

    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('TV show name')).toBeInTheDocument();
    expect(screen.getByTitle('icon')).toBeInTheDocument();
  });
});
