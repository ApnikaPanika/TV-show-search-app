import './Search.scss';
import { FC } from 'react';

type SearchProps = {
    onSearch: (value: string) => void
    searchValue: string
    submitHandler: () => void
}

const Search:FC<SearchProps> = ({ onSearch, searchValue, submitHandler }) => (
  <div className="search__container">
    <input
      className="search__input"
      type="text"
      value={searchValue}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="TV show name"
    />
    <button className="search__button" onClick={submitHandler}>Search</button>
  </div>
);

export default Search;
