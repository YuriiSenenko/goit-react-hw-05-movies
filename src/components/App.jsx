import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from 'pages/Home';
import SharedLayout from './SharedLayout';

// Розділення коду:
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    </>
  );
};

// - '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// - '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// - '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// - /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// - /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.
