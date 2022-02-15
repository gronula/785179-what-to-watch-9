import MainView from '../main-view/main-view';

type AppProps = {
  filmGenre: string;
  filmName: string;
  filmReleaseYear: string;
}

function App(
  { filmGenre, filmName, filmReleaseYear }: AppProps,
): JSX.Element {
  return (
    <MainView
      filmGenre={filmGenre}
      filmName={filmName}
      filmReleaseYear={filmReleaseYear}
    />
  );
}

export default App;
