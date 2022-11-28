import { useState } from 'react';
import { toast } from 'react-toastify';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const formSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.info('The search field is empty!');
      return;
    }
    onSubmit(query);
    // setQuery('');
  };
  return (
    <form onSubmit={formSubmit}>
      <input type="text" value={query} onChange={handleChange}></input>
      <button type="submit">Search</button>
    </form>
  );
};
