import React, { Fragment } from 'react';
import { render } from 'react-dom';
import 'styles.css';

import Header from 'components/Header';
import Bookmarks from 'components/Bookmarks';

const App: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <Bookmarks />
    </Fragment>
  );
};

render(<App />, document.getElementById('app-root'));
