import './IndividualShow.scss';
import { useState } from 'react';
import IndividualShowInfo from '../../Components/IndividualShowInfo/IndividualShowInfo';
import Episodes from '../../Components/Episodes/Episodes';

const IndividualShow = () => {
  const [showId, setShowId] = useState(0);

  return (
    <div>
      <IndividualShowInfo setShowId={setShowId} />
      <Episodes showId={showId} />
    </div>
  );
};

export default IndividualShow;
