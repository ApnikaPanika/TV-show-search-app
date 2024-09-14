import './SearchResults.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { searchInfoType } from '../../Data/Types';
import questionMark from '../../Assets/Photos/questionMark.png';
import NothingFound from './Components/NothingFound/NothingFound';
import { Search } from '../Search/Search';

const SearchResults = () => {
  const [results, setResults] = useState<searchInfoType[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [changeLook, setChangeLook] = useState(false);
  const [emptyResponse, setEmptyResponse] = useState(false);

  const submitHandler = async () => {
    await axios
      .get('/search/shows', {
        params: {
          q: searchValue,
        },
      })
      .then((res) => {
        if (res.data.length === 0) {
          setEmptyResponse(true);
        } else {
          setEmptyResponse(false);
        }
        setResults(res.data);
      });
  };

  const viewType = changeLook ? 'grid' : 'box';

  return (
    <>
      <Search onSearch={setSearchValue} searchValue={searchValue} submitHandler={submitHandler} />
      <div className="searchResults__button--container">
        <button
          className="searchResults__button"
          onClick={() => setChangeLook(!changeLook)}
          aria-label="Change look button"
        >
          <FontAwesomeIcon
            icon={changeLook ? faGripHorizontal : faBars}
            title="icon"
          />
        </button>
      </div>

      <div className={`searchResults__container--${viewType}`}>
        {emptyResponse && <NothingFound />}
        {results.map(({ show }) => (
          <Link
            to={`show/${show.id}`}
            className={`searchResults__link--${viewType}`}
            key={show.id}
          >
            <div className={`searchResults__item--${viewType}`}>
              <img
                className={`searchResults__image--${viewType}`}
                src={show.image?.original || questionMark}
                alt="Movie_photo"
              />
              <h3 className={`searchResults__title--${viewType}`}>{show.name}</h3>
            </div>
          </Link>
        ))}

      </div>
    </>
  );
};

export default SearchResults;
