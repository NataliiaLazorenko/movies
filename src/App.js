import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppBar from './components/AppBar';
import Spinner from './components/Spinner';
import { routes } from './routes';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: 'home-page' */),
);

const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: 'movies-page' */),
);

const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage' /* webpackChunkName: 'movie-details-page' */
  ),
);

const App = () => {
  return (
    <>
      <AppBar />

      <main>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route path={routes.movies} component={MoviesPage} />
            <Redirect to={routes.home} />
          </Switch>
        </Suspense>
      </main>
    </>
  );
};

export default App;
