import './styles.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Header({ categories, setIsZen, isZen }) {
  const handleClick = () => {
    setIsZen(!isZen);
  };
  const verb = isZen ? 'Désactiver' : 'Activer';

  return (
    <header className="menu">
      <nav>
        {
          categories.map((category) => (
            <NavLink
              key={category.label}
              className={({ isActive }) => (isActive ? 'menu-link menu-link--selected' : 'menu-link')}
              to={category.route}
            >
              {category.label}
            </NavLink>
          ))
        }
        <button className="menu-btn" type="button" onClick={handleClick}>{verb} le mode zen</button>
      </nav>
    </header>
  );
}

Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  setIsZen: PropTypes.func.isRequired,
  isZen: PropTypes.bool.isRequired,
};

export default Header;
