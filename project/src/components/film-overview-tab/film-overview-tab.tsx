import { Film } from '../../types/films';
import { getRatingText } from '../../utils/utils';

function FilmOverviewTab(
  {
    description,
    director,
    rating,
    scoresCount,
    starring,
  }: Film,
): JSX.Element {
  const filmRating = rating.toFixed(1).replace('.', ',');

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{filmRating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingText(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring">
          <strong>
            {starring.join(', ')}
          </strong>
        </p>
      </div>
    </>
  );
}

export default FilmOverviewTab;
