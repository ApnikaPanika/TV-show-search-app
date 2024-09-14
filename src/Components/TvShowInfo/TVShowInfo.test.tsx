import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { TvShowInfo } from './TvShowInfo';

describe('<TvShowInfo />', () => {
  it('should render with initial content', () => {
    const mockFunction = jest.fn();

    render(
      <BrowserRouter>
        <TvShowInfo setShowId={mockFunction} />
      </BrowserRouter>,
    );
  });
});
