import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundView from '../not-found-view/not-found-view';
import { AppRoutes } from '../../routes';

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
              element={route.element({
                filmGenre,
                filmName,
                filmReleaseYear,
              })}
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
