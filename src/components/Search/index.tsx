import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useInputState, useToggle } from '@mantine/hooks';
import classes from './Search.module.css';

import googleIcon from 'images/google.svg';
import duckIcon from 'images/duck.svg';
import searchIcon from 'images/search.svg';

type SearchEngine = 'Google' | 'DuckDuckGo';
const searchEngines: [SearchEngine, SearchEngine] = ['Google', 'DuckDuckGo'];

const Search: React.FC = () => {
  const [searchEngine, searchEngineToggle] = useToggle<SearchEngine>('Google', searchEngines);
  const [disableSubmit, setDisableSubmit] = useState<boolean>(false);
  const [inputValue, setInputValue] = useInputState<string>('');

  const handleInputClick = (e: React.MouseEvent) => {
    (e.target as HTMLInputElement).select();
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (disableSubmit) e.preventDefault();
  };

  useEffect(() => {
    if (inputValue !== '' && disableSubmit) setDisableSubmit(false);
    else if (inputValue === '' && !disableSubmit) setDisableSubmit(true);
  }, [inputValue]);

  return (
    <form
      className={classes.searchBox}
      action={searchEngine === 'Google' ? 'https://google.com/search' : 'https://duckduckgo.com/'}
      spellCheck={false}
      method='get'
      onSubmit={handleSubmit}
    >
      <div className={classes.engineToggle} onClick={() => searchEngineToggle()}>
        <img
          src={googleIcon}
          className={clsx({ [classes.show]: searchEngine === 'Google' })}
          alt=''
        />
        <img
          src={duckIcon}
          className={clsx({ [classes.show]: searchEngine === 'DuckDuckGo' })}
          alt=''
        />
      </div>
      <input
        className={classes.inputForm}
        name='q'
        type='text'
        value={inputValue}
        placeholder={`Search with ${searchEngine}`}
        onClick={handleInputClick}
        onChange={setInputValue}
      />
      <button className={clsx(classes.submit, disableSubmit && classes.disable)}>
        <img src={searchIcon} alt='' />
      </button>
    </form>
  );
};

export default Search;
