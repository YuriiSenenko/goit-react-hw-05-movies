import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    fetch(`
  https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a0d13cdb64d238d9f40292183aa77574&language=en-US`)
      .then(response => response.json())
      .then(({ cast }) => {
        setMovieCast(cast);
      })
      .catch(error => {
        alert(error);
      });
  }, [movieId]);

  if (!movieCast) {
    return;
  }

  return (
    <div>
      <ul>
        {movieCast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
