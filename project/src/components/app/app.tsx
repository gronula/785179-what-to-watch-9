import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundView from '../not-found-view/not-found-view';
import { AppRoutes } from '../../routes';
import PrivateRoute from '../private-route/private-route';
import { AuthorizationStatus } from '../../const';
import { Films } from '../../types/films';

type AppProps = {
  filmGenre: string;
  filmName: string;
  filmReleaseYear: string;
  films: Films;
}

function App(
  {
    filmGenre,
    filmName,
    filmReleaseYear,
    films,
  }: AppProps,
): JSX.Element {
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
                          filmGenre,
                          filmName,
                          filmReleaseYear,
                          films,
                        })
                      }
                    </PrivateRoute>
                  ) : (
                    route.element({
                      filmGenre,
                      filmName,
                      filmReleaseYear,
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
