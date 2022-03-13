import React from 'react';
import classes from './Category.module.css';

interface Bookmark {
  name: string;
  link: string;
}

interface CategoryProps {
  bookmark: Bookmark[];
  icon: string;
}

/**
 * Check the length of the string.
 * If it excceds maxLenght, replaces the end of string with the ellipsis character '…'
 */
const truncate = (str: string, maxLenght: number): string => {
  if (str.length <= maxLenght) return str;
  return str.slice(0, maxLenght - 1) + '\u2026';
};

const Category: React.FC<CategoryProps> = ({ bookmark, icon }) => {
  return (
    <div className={classes.category}>
      <img src={icon} className={classes.icon} alt='' />
      <div className={classes.bookmarks}>
        {bookmark.length !== 0 ? (
          bookmark.map((item) => (
            <a href={item.link} className={classes.link}>
              {truncate(item.name, 16)}
            </a>
          ))
        ) : (
          <p>Empty</p>
        )}
      </div>
    </div>
  );
};

export default Category;
