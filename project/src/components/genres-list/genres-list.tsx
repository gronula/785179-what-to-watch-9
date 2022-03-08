import { ALL_GENRES } from '../../const';
import { Film, FilmGenre } from '../../types/films';

type GenresListProps = {
  currentGenre: FilmGenre;
  films: Film[];
  onChange: (genre: FilmGenre) => void
}

function GenresList(
  {
    currentGenre,
    films,
    onChange,
  }: GenresListProps,
): JSX.Element {
  const genres: FilmGenre[] = [
    ALL_GENRES,
    ...new Set(films.map(((film) => film.genre))),
  ];

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => (
          <li
            key={genre}
            className={`catalog__genres-item ${genre === currentGenre ? 'catalog__genres-item--active' : ''}`}
          >
            <a
              href={genre}
              className="catalog__genres-link"
              onClick={(event) => {
                event.preventDefault();
                onChange(genre);
              }}
            >
              {genre}
            </a>
          </li>
        ))
      }
    </ul>
  );
}

export default GenresList;
