import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundView from '../not-found-view/not-found-view';
import { AppRoutes } from '../../routes';
import PrivateRoute from '../private-route/private-route';
import { AuthorizationStatus } from '../../const';

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
        {
          AppRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.isPrivate
                  ? (
                    <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                      {
                        route.element({
                          filmGenre,
                          filmName,
                          filmReleaseYear,
                        })
                      }
                    </PrivateRoute>
                  ) : (
                    route.element({
                      filmGenre,
                      filmName,
                      filmReleaseYear,
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
