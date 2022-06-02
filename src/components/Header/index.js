import './styles.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
            <a
              key={category.label}
              className={classNames('menu-link', { 'menu-link--selected': category.route === '/' })}
              href={category.route}
            >
              {category.label}
            </a>
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
