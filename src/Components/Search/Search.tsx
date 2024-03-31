import './Search.scss';

type SearchProps = {
    onSearch: (value: string) => void
    searchValue: string
    submitHandler: () => void
}

const Search = ({ onSearch, searchValue, submitHandler }: SearchProps) => (
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
