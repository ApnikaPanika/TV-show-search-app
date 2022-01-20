import { useState, useEffect, FC } from 'react';
import './IndividualShowInfo.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { singleShowInfo } from '../../Data/Types';
import questionMark from '../../Assets/Photos/questionMark.png';

type Props = {
    setShowId: (id: number) => void
}

const IndividualShowInfo:FC<Props> = ({ setShowId }) => {
  const [oneShow, setOneShow] = useState<singleShowInfo[]>([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('https://api.tvmaze.com/singlesearch/shows', {
        params: {
          q: id,
        },
      })
      .then((res) => {
        setOneShow([res.data]);
        return res;
      })
      .then((res) => setShowId(res.data.id));
  }, []);

  return (
    <div>
      <div>
        <h1>
          {oneShow.map((item) => (
            <div key={item.name} className="IndividualShowInfo__container">
              <h1 className="IndividualShowInfo__name">{item?.name}</h1>
              <div className="IndividualShowInfo__info__part">
                <div className="IndividualShowInfo__photo__container">
                  <img
                    className="IndividualShowInfo__photo"
                    src={item.image === null ? questionMark : item.image.medium}
                    alt="Show_logo"
                  />
                </div>
                <div className="IndividualShowInfo__text__container">
                  <div>
                    <h5 className="IndividualShowInfo__text">Rating:</h5>
                    <p>{item.rating.average === null ? 'Unknown' : item.rating.average}</p>
                  </div>
                  <div>
                    <h5 className="IndividualShowInfo__text">Description:</h5>
                    <p>
                      {
                    item.summary === null ? 'This show has no summary' : item.summary.replace(/<(?<=<).*?(?=>)>/g, '')
                    }
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </h1>
      </div>

    </div>
  );
};

export default IndividualShowInfo;
