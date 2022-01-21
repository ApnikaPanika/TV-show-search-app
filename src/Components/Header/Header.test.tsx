import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('<Header />', () => {
  it('should render with initial content', () => {
    const MockComponent = () => (
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    render(<MockComponent />);

    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });
});
