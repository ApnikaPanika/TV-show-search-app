import { useState } from 'react';
import { Episodes } from '../../Components/Episodes/Episodes';
import { TvShowInfo } from '../../Components/TvShowInfo/TvShowInfo';

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
