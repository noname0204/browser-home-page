import React from 'react';
import Category from 'components/Category';
import classes from './Bookmarks.module.css';
import data from 'bookmarks.json';

// TODO: Complete Bookmarks component style
const Bookmarks: React.FC = () => {
  return (
    <div className={classes.bookmark}>
      <Category bookmark={data.code} icon={'Code'} />
      <Category bookmark={data.course} icon={'Course'} />
      <Category bookmark={data.socialMedia} icon={'Social Media'} />
      <Category bookmark={data.utils} icon={'Utils'} />
    </div>
  );
};

export default Bookmarks;
