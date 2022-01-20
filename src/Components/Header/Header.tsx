import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Photos/arvatoLogo.png';

const Header = () => (
  <div className="header__container">
    <img className="header__logo" src={logo} alt="logo" />
    <Link to="/">
      <FontAwesomeIcon
        icon={faHome}
        className="header__home"
      />
    </Link>
  </div>
);

export default Header;
