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
      .get('https://api.tvmaze.com/search/shows', {
        params: {
          q: searchValue,
        },
      })
      .then((res) => (setResults(res.data)
      ));
  };

  return (
    <div>
      <Search setSearchValue={setSearchValue} searchValue={searchValue} submitHandler={submitHandler} />
      <div className="searchResults__all__item__container">
        {results.map((item) => (
          <Link to={`show/${item.show.name}`} className="searchResults__link" key={item.score}>
            <div className="searchResults__one__item__container">
              <img
                className="searchResults__image"
                src={item.show.image === null ? questionMark
                  : item.show.image?.original}
                alt="Movie_photo"
              />
              <h3 className="searchResults__name">{item.show.name}</h3>
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
};

export default SearchResults;
