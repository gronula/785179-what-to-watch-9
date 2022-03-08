import React from 'react';
import { LogoTheme } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setFilmsByGenre, setGenre } from '../../store/action';
import { Film, FilmGenre } from '../../types/films';
import FilmsList from '../films-list/films-list';
import GenresList from '../genres-list/genres-list';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

type MainViewProps = {
  films: Film[];
  genre: string;
  name: string;
  releaseDate: string;
}

const CATALOG_FILMS_NUMBER = 20;

function MainView(
  {
    films,
    genre,
    name,
    releaseDate,
  }: MainViewProps,
): JSX.Element {
  const dispatch = useAppDispatch();
  const { currentGenre, filmsByGenre } = useAppSelector((state) => state);
  const catalogFilms = films.slice(0, CATALOG_FILMS_NUMBER);
  const filteredFilms = filmsByGenre.slice(0, CATALOG_FILMS_NUMBER);

  const handleGenreChange = (selectedGenre: FilmGenre) => {
    dispatch(setGenre(selectedGenre));
    dispatch(setFilmsByGenre(selectedGenre));
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{releaseDate}</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            currentGenre={currentGenre}
            films={catalogFilms}
            onChange={handleGenreChange}
          />

          <div className="catalog__films-list">
            <FilmsList
              className="catalog__films-card"
              films={filteredFilms}
            />
          </div>

          <div className="catalog__more">
            <button
              className="catalog__button"
              type="button"
            >
              Show more
            </button>
          </div>
        </section>

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

export default MainView;
