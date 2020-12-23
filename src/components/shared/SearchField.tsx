import { TextField } from '@material-ui/core';
import React, { FC, useState } from 'react';

export interface SearchFieldProps {
  repos: any[];
  originalRepos: any[];
  setRepos: (repos: any) => void;
}

const SearchField: FC<SearchFieldProps> = ({ repos, originalRepos, setRepos }) => {
  const [field, setField] = useState('');
  const onChangeField = (value: string) => {
    setField(value);
    if (value.length > 2) {
      setRepos(repos.filter((repo) => repo.name.toLowerCase().includes(value.toLowerCase())).slice(0, 5));
    } else {
      setRepos(originalRepos);
    }
  };
  return (
    <TextField
      style={{ width: '80%' }}
      id="standard-search"
      label="Buscar"
      type="search"
      value={field}
      onChange={(e) => onChangeField(e.target.value)}
    />
  );
};

export default SearchField;
