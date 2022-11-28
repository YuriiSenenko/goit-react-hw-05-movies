import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`
https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=a0d13cdb64d238d9f40292183aa77574&language=en-US&page=1`)
      .then(response => response.json())
      .then(({ results }) => {
        setReviews(results);
      })
      .catch(error => {
        alert(error);
      });
  }, [movieId]);

  // if (reviews.length === 0) {
  //   console.log('дані відсутні');
  // } else {
  //   console.log(reviews);
  // }

  // if (!reviews) {
  //   return;
  // }

  return (
    <div>
      {reviews.length === 0 && <p>We don't have any reviews for this movie.</p>}
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>{author}</p>
            <article>{content}</article>
          </li>
        ))}{' '}
      </ul>
    </div>
  );
};

export default Reviews;
