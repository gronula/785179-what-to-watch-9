import React from 'react';
import SmallFilmCard from '../small-film-card/small-film-card';
import SVGSprite from '../svg-sprite/svg-sprite';

const filmsList = [
  {
    id: 1,
    poster: {
      src: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
      alt: 'Fantastic Beasts: The Crimes of Grindelwald',
      width: 280,
      height: 175,
    },
    href: 'film-page.html',
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
  },
  {
    id: 2,
    poster: {
      src: 'img/bohemian-rhapsody.jpg',
      alt: 'Bohemian Rhapsody',
      width: 280,
      height: 175,
    },
    href: 'film-page.html',
    title: 'Bohemian Rhapsody',
  },
  {
    id: 3,
    poster: {
      src: 'img/macbeth.jpg',
      alt: 'Macbeth',
      width: 280,
      height: 175,
    },
    href: 'film-page.html',
    title: 'Macbeth',
  },
  {
    id: 4,
    poster: {
      src: 'img/aviator.jpg',
      alt: 'Aviator',
      width: 280,
      height: 175,
    },
    href: 'film-page.html',
    title: 'Aviator',
  },
  {
    id: 5,
    poster: {
      src: 'img/we-need-to-talk-about-kevin.jpg',
      alt: 'We need to talk about Kevin',
      width: 280,
      height: 175,
    },
    href: 'film-page.html',
    title: 'We need to talk about Kevin',
  },
  {
    id: 6,
    poster: {
      src: 'img/what-we-do-in-the-shadows.jpg',
      alt: 'What We Do in the Shadows',
      width: 280,
      height: 175,
    },
    href: 'film-page.html',
    title: 'What We Do in the Shadows',
  },
  {
    id: 7,
    poster: {
      src: 'img/revenant.jpg',
      alt: 'Revenant',
      width: 280,
      height: 175,
    },
    href: 'film-page.html',
    title: 'Revenant',
  },
  {
    id: 8,
    poster: {
      src: 'img/johnny-english.jpg',
      alt: 'Johnny English',
      width: 280,
      height: 175,
    },
    href: 'film-page.html',
    title: 'Johnny English',
  },
  {
    id: 9,
    poster: {
      src: 'img/shutter-island.jpg',
      alt: 'Shutter Island',
      width: 280,
      height: 175,
    },
    href: 'film-page.html',
    title: 'Shutter Island',
  },
  {
    id: 10,
    poster: {
      src: 'img/pulp-fiction.jpg',
      alt: 'Pulp Fiction',
      width: 280,
      height: 175,
    },
    href: 'film-page.html',
    title: 'Pulp Fiction',
  },
  {
    id: 11,
    poster: {
      src: 'img/no-country-for-old-men.jpg',
      alt: 'No Country for Old Men',
      width: 280,
      height: 175,
    },
    href: 'film-page.html',
    title: 'No Country for Old Men',
  },
  {
    id: 12,
    poster: {
      src: 'img/snatch.jpg',
      alt: 'Snatch',
      width: 280,
      height: 175,
    },
    href: 'film-page.html',
    title: 'Snatch',
  },
  {
    id: 13,
    poster: {
      src: 'img/moonrise-kingdom.jpg',
      alt: 'Moonrise Kingdom',
      width: 280,
      height: 175,
    },
    href: 'film-page.html',
    title: 'Moonrise Kingdom',
  },
  {
    id: 14,
    poster: {
      src: 'img/seven-years-in-tibet.jpg',
      alt: 'Seven Years in Tibet',
      width: 280,
      height: 175,
    },
    href: 'film-page.html',
    title: 'Seven Years in Tibet',
  },
  {
    id: 15,
    poster: {
      src: 'img/midnight-special.jpg',
      alt: 'Midnight Special',
      width: 280,
      height: 175,
    },
    href: 'film-page.html',
    title: 'Midnight Special',
  },
  {
    id: 16,
    poster: {
      src: 'img/war-of-the-worlds.jpg',
      alt: 'War of the Worlds',
      width: 280,
      height: 175,
    },
    href: 'film-page.html',
    title: 'War of the Worlds',
  },
  {
    id: 17,
    poster: {
      src: 'img/dardjeeling-limited.jpg',
      alt: 'Dardjeeling Limited',
      width: 280,
      height: 175,
    },
    href: 'film-page.html',
    title: 'Dardjeeling Limited',
  },
  {
    id: 18,
    poster: {
      src: 'img/orlando.jpg',
      alt: 'Orlando',
      width: 280,
      height: 175,
    },
    href: 'film-page.html',
    title: 'Orlando',
  },
  {
    id: 19,
    poster: {
      src: 'img/mindhunter.jpg',
      alt: 'Mindhunter',
      width: 280,
      height: 175,
    },
    href: 'film-page.html',
    title: 'Mindhunter',
  },
  {
    id: 20,
    poster: {
      src: 'img/midnight-special.jpg',
      alt: 'Midnight Special',
      width: 280,
      height: 175,
    },
    href: 'film-page.html',
    title: 'Midnight Special',
  },
];

function MainView(): JSX.Element {
  return (
    <React.Fragment>
      <SVGSprite />

      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">The Grand Budapest Hotel</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">Drama</span>
                <span className="film-card__year">2014</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
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
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <div className="catalog__films-list">
            {
              filmsList.map(({id, ...film}) => (
                <SmallFilmCard
                  key={id}
                  className="catalog__films-card"
                  {...film}
                />
              ))
            }
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default MainView;
