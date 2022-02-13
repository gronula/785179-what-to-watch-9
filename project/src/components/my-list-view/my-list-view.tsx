import SmallFilmCard from '../small-film-card/small-film-card';

const filmsList = [
  {
    id: 1,
    poster: {
      src: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
      alt: 'Fantastic Beasts: The Crimes of Grindelwald',
    },
    href: 'film-page.html',
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
  },
  {
    id: 2,
    poster: {
      src: 'img/bohemian-rhapsody.jpg',
      alt: 'Bohemian Rhapsody',
    },
    href: 'film-page.html',
    title: 'Bohemian Rhapsody',
  },
  {
    id: 3,
    poster: {
      src: 'img/macbeth.jpg',
      alt: 'Macbeth',
    },
    href: 'film-page.html',
    title: 'Macbeth',
  },
  {
    id: 4,
    poster: {
      src: 'img/aviator.jpg',
      alt: 'Aviator',
    },
    href: 'film-page.html',
    title: 'Aviator',
  },
  {
    id: 5,
    poster: {
      src: 'img/we-need-to-talk-about-kevin.jpg',
      alt: 'We need to talk about Kevin',
    },
    href: 'film-page.html',
    title: 'We need to talk about Kevin',
  },
  {
    id: 6,
    poster: {
      src: 'img/what-we-do-in-the-shadows.jpg',
      alt: 'What We Do in the Shadows',
    },
    href: 'film-page.html',
    title: 'What We Do in the Shadows',
  },
  {
    id: 7,
    poster: {
      src: 'img/revenant.jpg',
      alt: 'Revenant',
    },
    href: 'film-page.html',
    title: 'Revenant',
  },
  {
    id: 8,
    poster: {
      src: 'img/johnny-english.jpg',
      alt: 'Johnny English',
    },
    href: 'film-page.html',
    title: 'Johnny English',
  },
  {
    id: 9,
    poster: {
      src: 'img/shutter-island.jpg',
      alt: 'Shutter Island',
    },
    href: 'film-page.html',
    title: 'Shutter Island',
  },
];

function MyListView(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width="63"
                height="63"
              />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

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
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a
            href="main.html"
            className="logo__link logo__link--light"
          >
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
  );
}

export default MyListView;
