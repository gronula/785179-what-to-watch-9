import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import FilmView from '../film-view/film-view';
import LoginView from '../login-view/login-view';
import MainView from '../main-view/main-view';
import MyListView from '../my-list-view/my-list-view';
import NotFoundView from '../not-found-view/not-found-view';
import PlayerView from '../player-view/player-view';
import ReviewView from '../review-view/review-view';

type AppProps = {
  filmGenre: string;
  filmName: string;
  filmReleaseYear: string;
}

function App(
  { filmGenre, filmName, filmReleaseYear }: AppProps,
): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainView
              filmGenre={filmGenre}
              filmName={filmName}
              filmReleaseYear={filmReleaseYear}
            />
          }
        />

        <Route
          path={AppRoute.MyList}
          element={<MyListView />}
        />

        <Route
          path={AppRoute.Login}
          element={<LoginView />}
        />

        <Route
          path={AppRoute.Player}
          element={<PlayerView />}
        />

        <Route
          path={AppRoute.Film}
          element={<FilmView />}
        />

        <Route
          path={AppRoute.Review}
          element={<ReviewView />}
        />

        <Route
          path="*"
          element={<NotFoundView />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
