import { render } from '@testing-library/react';

import TvShowInfo from './TvShowInfo';

describe('<TvShowInfo />', () => {
  it('should render with initial content', () => {
    const mockFunction = jest.fn();
    render(<TvShowInfo setShowId={mockFunction} />);
  });
});
