import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  // console.log(movieId);

  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetch(`
https://api.themoviedb.org/3/movie/${movieId}?api_key=a0d13cdb64d238d9f40292183aa77574&language=en-US`)
      .then(response => response.json())
      .then(console.log())
      .then(
        ({
          title,
          overview,
          vote_average,
          genres,
          poster_path,
          release_date,
        }) => {
          setMovieDetails({
            title,
            overview,
            vote_average,
            genres,
            poster_path,
            release_date,
          });
        }
      )
      .catch(error => {
        alert(error);
      });
  }, [movieId]);

  if (!movieDetails) {
    return;
  }
  const { title, overview, vote_average, genres, poster_path, release_date } =
    movieDetails;
  const backLink = location.state?.from ?? '/movies';

  const dateRelease = () => {
    if (release_date) {
      const year = release_date.slice(0, 4);
      return year;
    }
  };

  return (
    <>
      <div>
        <Link to={backLink}>Go back</Link>
        <img
          src={`https://www.themoviedb.org/t/p/w500${poster_path}`}
          alt=""
        ></img>
        <h1>
          {title} ({dateRelease()})
        </h1>
        <p>Rating: {vote_average.toFixed(1)}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(genre => genre.name).join(' ')}</p>
      </div>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
