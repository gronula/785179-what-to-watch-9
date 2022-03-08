import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundView from '../not-found-view/not-found-view';
import { AppRoutes } from '../../routes';
import PrivateRoute from '../private-route/private-route';
import { ALL_GENRES, AuthorizationStatus } from '../../const';
import { Film } from '../../types/films';
import { useAppDispatch } from '../../hooks';
import { setFilmsByGenre } from '../../store/action';

type AppProps = {
  films: Film[];
  genre: string;
  name: string;
  releaseDate: string;
}

function App(
  {
    films,
    genre,
    name,
    releaseDate,
  }: AppProps,
): JSX.Element {
  const dispatch = useAppDispatch();

  dispatch(setFilmsByGenre(ALL_GENRES));

  return (
    <BrowserRouter>
      <Routes>
        {
          AppRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.isPrivate
                  ? (
                    <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                      {
                        route.element({
                          genre,
                          name,
                          releaseDate,
                          films,
                        })
                      }
                    </PrivateRoute>
                  ) : (
                    route.element({
                      genre,
                      name,
                      releaseDate,
                      films,
                    })
                  )
              }
            />
          ))
        }

        <Route
          path="*"
          element={<NotFoundView />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
