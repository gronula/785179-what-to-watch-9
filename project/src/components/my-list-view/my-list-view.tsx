import { Films } from '../../types/films';
import FilmsList from '../films-list/films-list';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

type MyListViewProps = {
  films: Films
}

const CATALOG_FILMS_NUMBER = 8;

function MyListView(
  {
    films,
  }: MyListViewProps,
): JSX.Element {
  const catalogFilms = films.slice(0, CATALOG_FILMS_NUMBER);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmsList
            className="catalog__films-card"
            films={catalogFilms}
          />
        </div>
      </section>

      <footer className="page-footer">
        <Logo light />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListView;
