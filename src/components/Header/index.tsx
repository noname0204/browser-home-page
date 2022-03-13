import React from 'react';
import classes from './Header.module.css';

import Search from 'components/Search';
import DigitalClock from 'components/DigitalClock';

const Header: React.FC = () => {
  return (
    <div className={classes.header}>
      <DigitalClock />
      <Search />
    </div>
  );
};

export default Header;
