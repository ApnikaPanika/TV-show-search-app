import './Search.scss';
import { FC } from 'react';

type Props = {
    setSearchValue: (value: string) => void
    searchValue: string
    submitHandler: () => void
}

const Search:FC<Props> = ({ setSearchValue, searchValue, submitHandler }) => (
  <div className="search__container">
    <input
      className="search__input"
      type="text"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Show name"
    />
    <button className="search__button" onClick={submitHandler}>Search</button>
  </div>
);

export default Search;
