import React from 'react';
import Category from 'components/Category';

import classes from './Bookmarks.module.css';
import data from 'bookmarks.json';

import codeIcon from 'images/code.svg';
import courseIcon from 'images/course.svg';
import socialMediaIcon from 'images/social-media.svg';
import utilsIcon from 'images/utils.svg';

const Bookmarks: React.FC = () => {
  return (
    <div className={classes.bookmark}>
      <Category bookmark={data.code} icon={codeIcon} />
      <Category bookmark={data.course} icon={courseIcon} />
      <Category bookmark={data.socialMedia} icon={socialMediaIcon} />
      <Category bookmark={data.utils} icon={utilsIcon} />
    </div>
  );
};

export default Bookmarks;
