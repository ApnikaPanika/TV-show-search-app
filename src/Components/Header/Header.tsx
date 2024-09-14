import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Photos/arvatoLogo.png';

export const Header = () => (
  <div className="header__container">
    <div className="header__logo--container">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
    </div>
  </div>
);
