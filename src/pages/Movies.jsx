import { SearchForm } from 'components/SearchForm';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Links } from './Movies.styled';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = 'a0d13cdb64d238d9f40292183aa77574';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('q') ?? '';
  const location = useLocation();

  useEffect(() => {
    setQuery(search);
    if (query === '') {
      return;
    }

    fetch(`${BASE_URL}?api_key=${API_KEY}&query=${query}`)
      .then(response => response.json())
      .then(({ results }) => {
        setSearchMovies(results);
      })
      .catch(error => {
        alert(error);
      });
  }, [query, search]);

  const handleChange = searchValue => {
    setQuery(searchValue);
    setSearchParams({ q: searchValue });
  };

  return (
    <div>
      <SearchForm onSubmit={handleChange} />
      <ul>
        {searchMovies.map(({ id, title }) => (
          <Links key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title}
            </Link>
          </Links>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
