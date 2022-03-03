import { Link, useParams } from 'react-router-dom';
import { LogoTheme } from '../../const';
import { Film } from '../../types/films';
import { getFilmById } from '../../utils/utils';
import FilmsList from '../films-list/films-list';
import Logo from '../logo/logo';
import Tabs from '../tabs/tabs';
import UserBlock from '../user-block/user-block';

type FilmViewProps = {
  films: Film[];
}

const CATALOG_FILMS_NUMBER = 4;

function FilmView(
  {
    films,
  }: FilmViewProps,
): JSX.Element {
  const params = useParams();
  const id = Number(params.id);
  // TODO вынести в useEffect
  const film = getFilmById(films, id) as Film;
  const catalogFilms = films
    .filter((item) => (item.genre === film.genre && item.name !== film.name))
    .slice(0, CATALOG_FILMS_NUMBER);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={film.backgroundImage}
              alt={film.name}
            />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />
            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>

              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg
                    viewBox="0 0 19 19"
                    width="19"
                    height="19"
                  >
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>

                <button
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg
                    viewBox="0 0 19 20"
                    width="19"
                    height="20"
                  >
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>

                <Link
                  className="btn film-card__button"
                  to={`/films/${film.id}/review`}
                >
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film.posterImage}
                alt={film.name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <Tabs film={film as Film} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        {
          catalogFilms.length > 0 && (
            <section className="catalog catalog--like-this">
              <h2 className="catalog__title">More like this</h2>

              <div className="catalog__films-list">
                <FilmsList
                  className="catalog__films-card"
                  films={catalogFilms}
                />
              </div>
            </section>
          )
        }

        <footer className="page-footer">
          <Logo theme={LogoTheme.Light} />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default FilmView;
