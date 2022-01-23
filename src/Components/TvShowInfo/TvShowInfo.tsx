import { useState, useEffect, FC } from 'react';
import './TvShowInfo.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { singleShowInfo } from '../../Data/Types';
import questionMark from '../../Assets/Photos/questionMark.png';

type TvShowProps = {
    setShowId: (id: number) => void
}

const TvShowInfo:FC<TvShowProps> = ({ setShowId }) => {
  const [oneShow, setOneShow] = useState<singleShowInfo[]>([]);
  const { slug } = useParams();

  useEffect(() => {
    axios
      .get('/singlesearch/shows', {
        params: {
          q: slug,
        },
      })
      .then((res) => {
        setOneShow([res.data]);
        setShowId(res.data.id);
      });
  }, []);

  console.log(slug);

  return (
    <div>
      {oneShow.map(({
        name, image, rating, summary, premiered, genres,
      }) => (
        <div key={name} className="IndividualShowInfo__container">
          <h1 className="IndividualShowInfo__name">{name}</h1>
          <div className="IndividualShowInfo__info--container">
            <div className="IndividualShowInfo__photo--container">
              <img
                className="IndividualShowInfo__photo"
                src={image?.original || questionMark}
                alt="Show_logo"
              />
            </div>
            <div className="IndividualShowInfo__text--container">

              <div className="IndividualShowInfo__rating">
                <FontAwesomeIcon
                  icon={faStar}
                />
                <p>{rating.average || 'Unknown'}</p>
              </div>
              <br />
              <div>
                <h5 className="IndividualShowInfo__text">Description:</h5>
                <p>
                  {
                    summary === null ? 'This show has no summary' : summary.replace(/<(?<=<).*?(?=>)>/g, '')
                    }
                </p>
              </div>
              <br />
              <div>
                <h5 className="IndividualShowInfo__text">Premiered:</h5>
                <p>
                  {premiered || 'Unknown'}
                </p>
              </div>
              <br />
              <div>
                <ul className="IndividualShowInfo__text">Genres:</ul>
                {!genres || !genres.length
                  ? <li className="IndividualShowInfo__genre">Unknown</li>
                  : genres.map((genre: string) => (
                    <li className="IndividualShowInfo__genre">{genre}</li>
                  ))}
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TvShowInfo;
