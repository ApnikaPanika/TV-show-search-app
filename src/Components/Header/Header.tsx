import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Photos/arvatoLogo.png';

const Header = () => {
  console.log(123);

  return (
    <div className="header__container">
      <img className="header__logo" src={logo} alt="logo" />
      <Link to="/" className="header__home">
        <FontAwesomeIcon
          icon={faHome}
          className="header__home"
        />
      </Link>
    </div>
  );
};

export default Header;
