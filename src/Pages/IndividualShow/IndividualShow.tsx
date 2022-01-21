import './IndividualShow.scss';
import { useState } from 'react';
import TvShowInfo from '../../Components/TvShowInfo/TvShowInfo';
import Episodes from '../../Components/Episodes/Episodes';

const IndividualShow = () => {
  const [showId, setShowId] = useState(0);

  return (
    <div>
      <TvShowInfo setShowId={setShowId} />
      <Episodes showId={showId} />
    </div>
  );
};

export default IndividualShow;
