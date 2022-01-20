import './Logo.scss';
import logo from '../../Assets/Photos/arvatoLogo.png';

const Logo = () => (
  <div className="logo__container">
    <img className="logo__image" src={logo} alt="Logo" />
  </div>
);

export default Logo;
