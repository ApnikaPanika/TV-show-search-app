import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import Search from './Search';

describe('<Search />', () => {
  it('should render with initial content', () => {
    const mockFunction = jest.fn();
    render(<Search onSearch={mockFunction} searchValue="" submitHandler={mockFunction} />);

    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('TV Show name')).toBeInTheDocument();
  });

  it('should be able to write text in input field', () => {
    const mockFunction = jest.fn();
    const MockComponent = () => {
      const [inputValue, setInputValue] = useState('');
      return <Search searchValue={inputValue} onSearch={setInputValue} submitHandler={mockFunction} />;
    };
    render(<MockComponent />);
    const input = screen.getByPlaceholderText('TV Show name') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Grimm' } });

    expect(input.value).toBe('Grimm');
  });

  it('should be able to press button', () => {
    const mockFunction = jest.fn();
    render(<Search onSearch={mockFunction} searchValue="" submitHandler={mockFunction} />);

    fireEvent.click(screen.getByText('Search'));

    expect(mockFunction).toHaveBeenCalled();
  });
});
