import React from 'react';
import { LogoTheme } from '../../const';
import { Film } from '../../types/films';
import FilmsList from '../films-list/films-list';
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
  const catalogFilms = films.slice(0, CATALOG_FILMS_NUMBER);

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

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a
                href="all-genres.html"
                className="catalog__genres-link"
              >
                All genres
              </a>
            </li>
            <li className="catalog__genres-item">
              <a
                href="comedies.html"
                className="catalog__genres-link"
              >
                Comedies
              </a>
            </li>
            <li className="catalog__genres-item">
              <a
                href="crime.html"
                className="catalog__genres-link"
              >
                Crime
              </a>
            </li>
            <li className="catalog__genres-item">
              <a
                href="documentary.html"
                className="catalog__genres-link"
              >
                Documentary
              </a>
            </li>
            <li className="catalog__genres-item">
              <a
                href="dramas.html"
                className="catalog__genres-link"
              >
                Dramas
              </a>
            </li>
            <li className="catalog__genres-item">
              <a
                href="horror.html"
                className="catalog__genres-link"
              >
                Horror
              </a>
            </li>
            <li className="catalog__genres-item">
              <a
                href="kids-family.html"
                className="catalog__genres-link"
              >
                Kids & Family
              </a>
            </li>
            <li className="catalog__genres-item">
              <a
                href="romance.html"
                className="catalog__genres-link"
              >
                Romance
              </a>
            </li>
            <li className="catalog__genres-item">
              <a
                href="sci-fi.html"
                className="catalog__genres-link"
              >
                Sci-Fi
              </a>
            </li>
            <li className="catalog__genres-item">
              <a
                href="thrillers.html"
                className="catalog__genres-link"
              >
                Thrillers
              </a>
            </li>
          </ul>

          <div className="catalog__films-list">
            <FilmsList
              className="catalog__films-card"
              films={catalogFilms}
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
            <p>?? 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainView;
