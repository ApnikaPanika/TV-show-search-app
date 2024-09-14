import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';

describe('<Header />', () => {
  it('should render with initial content', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });
});
