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

// TODO: Complete Category component
const Category: React.FC<CategoryProps> = ({ bookmark, icon }) => {
  console.log(bookmark);

  return <div className={classes.category}>{icon}</div>;
};

export default Category;
