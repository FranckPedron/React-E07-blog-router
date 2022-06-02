import './styles.scss';
import React from 'react';

function Footer() {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer className="copyright">
      DevOfThrones, le blog du développeur React - {year} ©
    </footer>
  );
}

export default React.memo(Footer);
