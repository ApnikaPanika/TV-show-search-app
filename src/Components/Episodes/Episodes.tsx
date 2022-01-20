import { FC, useEffect, useState } from 'react';
import './Episodes.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { episodeTypeList } from '../../Data/Types';
import questionMark from '../../Assets/Photos/questionMark.png';

type Props = {
    showId: number
}

const Episodes:FC<Props> = ({ showId }) => {
  const [allEpisodeList, setAllEpisodeList] = useState<episodeTypeList[]>([]);
  const [seasonList, setSeasonList] = useState<number[]>([]);
  const [choosenSeason, setChoosenSeason] = useState('1');

  useEffect(() => {
    if (showId) {
      axios
        .get(`https://api.tvmaze.com/shows/${showId}/episodes`)
        .then((res) => {
          setAllEpisodeList(res.data);
          return res;
        })
        .then((res) => {
          setSeasonList(res.data.map((item: episodeTypeList) => item.season));
        });
    }
  }, [showId]);

  const optionList = seasonList.filter((item, index) => seasonList.indexOf(item) === index);

  const episodeList = allEpisodeList.filter((item) => item.season === +choosenSeason);

  return (
    <div className="episodes__container">
      <h1 className="episodes__heading"> Seasons & episodes </h1>
      <div>
        Season:
        <select className="episodes__select" onChange={(e) => setChoosenSeason(e.target.value)}>
          {optionList.map((option) => (
            <option value={option} key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="episodes__episodes__container">
        {episodeList.map((item) => (
          <div className="episodes__episode__container" key={item.id}>
            <div className="episodes__picture__container">
              <img
                className="episodes__small__picture"
                src={
                item.image === null ? questionMark : item.image.original
                }
                alt="episode_photo"
              />
            </div>
            <div className="episodes__episode__description__container">
              <div className="episodes__episode__description">

                <h3 className="episodes__episode__header">
                  {item.number}
                  .
                  {item.name}
                </h3>

                <p>
                  {item.summary === '' || item.summary === null ? 'There is no description, for this episode.'
                    : item.summary.replace(/<(?<=<).*?(?=>)>/g, '')}

                </p>

              </div>
              <div>
                <h3 className="episodes__description__rating">
                  <FontAwesomeIcon
                    icon={faStar}
                  />
                  {item.rating.average === null ? 'Unknown' : item.rating.average}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episodes;
