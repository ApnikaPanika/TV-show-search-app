import {
  useEffect, useMemo, useState,
} from 'react';
import './Episodes.scss';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { EpisodeTypeList } from '../../Data/Types';
import questionMark from '../../Assets/Photos/questionMark.png';

type EpisodeProps = {
    showId: number
}

export const Episodes = ({ showId }: EpisodeProps) => {
  const [allEpisodeList, setAllEpisodeList] = useState<EpisodeTypeList[]>([]);
  const [seasonList, setSeasonList] = useState<number[]>([]);
  const [chosenSeason, setChosenSeason] = useState('1');

  useEffect(() => {
    if (showId) {
      axios
        .get(`/shows/${showId}/episodes`)
        .then((res) => {
          setAllEpisodeList(res.data);
          setSeasonList(res.data.map(({ season } :EpisodeTypeList) => season));
        });
    }
  }, [showId]);

  const optionList = useMemo(() => seasonList.filter((item, index) => seasonList.indexOf(item) === index),
    [seasonList]);

  const episodeList = useMemo(() => allEpisodeList.filter((item) => item.season === +chosenSeason),
    [allEpisodeList, chosenSeason]);

  return (
    <div className="episodes__container">
      <h1 className="episodes__heading"> Seasons & episodes </h1>
      {!episodeList.length ? 'There is no information available' : (
        <div>
          <div className="episodes__season--container">
            <p className="episodes__season--text">Season:</p>
            <select className="episodes__select" onChange={(e) => setChosenSeason(e.target.value)}>
              {optionList.map((option) => (
                <option value={option} key={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="episodes__episodes--container">
            {episodeList.map(({
              image, id, number, name, summary, rating,
            }) => (
              <div className="episodes__episode--container" key={id}>
                <div className="episodes__picture--container">
                  <img
                    className="episodes__picture"
                    src={image?.original || questionMark}
                    alt="episode_photo"
                  />
                </div>
                <div className="episodes__description--container">
                  <div className="episodes__description">

                    <h3 className="episodes__episode--header">
                      {number}
                      .
                      {name}
                    </h3>

                    <p>
                      {summary === '' || summary === null ? 'There is no description, for this episode.'
                        : summary.replace(/<(?<=<).*?(?=>)>/g, '')}
                    </p>

                  </div>
                  <div>
                    <h3 className="episodes__description--rating">
                      <FontAwesomeIcon
                        icon={faStar}
                      />
                      {rating.average || 'Unknown'}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
