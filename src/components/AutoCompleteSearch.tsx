import React, { useState } from 'react';
import { Autocomplete, AutocompleteItem } from '@ui-kitten/components';
import { MovieHandller } from '../utils/MovieHandller';

const movies = MovieHandller

const filter = (item, query) => item.title.toLowerCase().includes(query.toLowerCase());

export const AutocompleteSearch = () => {

  const [value, setValue] = useState(null);
  const [data, setData] = useState(movies);

  const onSelect = (index) => {
    setValue(movies[index].title);
  };

  const onChangeText = (query) => {
    setValue(query);
    setData(movies.filter(item => filter(item, query)));
  };

  const renderOption = (item, index) => (
    <AutocompleteItem
      key={index}
      title={item.title}
    />
  );

  return (
    <Autocomplete
      placeholder='Place your Text'
      value={value}
      onSelect={onSelect}
      onChangeText={onChangeText}>
      {data.map(renderOption)}
    </Autocomplete>
  );
};