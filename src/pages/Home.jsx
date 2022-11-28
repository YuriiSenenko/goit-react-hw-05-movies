import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Links } from './Home.styled';

const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
const API_KEY = 'a0d13cdb64d238d9f40292183aa77574';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(`${BASE_URL}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(({ results }) => {
        setTrendingMovies(results);
      })
      .catch(error => {
        alert(error);
      });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(({ id, title }) => (
          <Links key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </Links>
        ))}
      </ul>
    </div>
  );
};

export default Home;
