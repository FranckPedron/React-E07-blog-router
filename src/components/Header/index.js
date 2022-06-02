import './styles.scss';
import PropTypes from 'prop-types';

function Header({ categories }) {
  return (
    <header className="menu">
      <nav>
        {
          categories.map((category) => <a key={category.label} className="menu-link" href={category.route}>{category.label}</a>)
        }
        <button className="menu-btn" type="button">Activer le mode zen</button>
      </nav>
    </header>
  );
}

Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};

export default Header;
