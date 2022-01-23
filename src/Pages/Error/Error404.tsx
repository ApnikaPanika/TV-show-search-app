import { Link } from 'react-router-dom';
import './Error404.scss';

const Error404 = () => (
  <div className="Error404__container">
    <h1 className="Error404__heading">404 error</h1>
    <h1 className="Error404__heading">How did you occurred here? </h1>
    <div className="Error404__home--container">
      <h1 className="Error404__home--heading">Please return to the</h1>
      <Link to="/" className="Error404__home--button">home</Link>
      <h1 className="Error404__home--heading">page</h1>

    </div>
  </div>
);

export default Error404;
