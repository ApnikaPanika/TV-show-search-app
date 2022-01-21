import './SearchResults.scss';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import { searchInfoType } from '../../Data/Types';
import questionMark from '../../Assets/Photos/questionMark.png';

const SearchResults = () => {
  const [results, setResults] = useState<searchInfoType[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const submitHandler = () => {
    axios
      .get('/search/shows', {
        params: {
          q: searchValue,
        },
      })
      .then((res) => (setResults(res.data)
      ));
  };

  return (
    <div>
      <Search onSearch={setSearchValue} searchValue={searchValue} submitHandler={submitHandler} />
      <div className="searchResults__container">
        {results.map(({ show }) => (
          <Link to={`show/${show.name}`} className="searchResults__link" key={show.id}>
            <div className="searchResults__item__container">
              <img
                className="searchResults__image"
                src={show.image?.original || questionMark}
                alt="Movie_photo"
              />
              <h3 className="searchResults__show__name">{show.name}</h3>
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
};

export default SearchResults;
