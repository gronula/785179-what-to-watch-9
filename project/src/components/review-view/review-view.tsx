import { Link, useParams } from 'react-router-dom';
import { Film } from '../../types/films';
import { getFilmById } from '../../utils/utils';
import Logo from '../logo/logo';
import ReviewForm from '../review-form/review-form';
import UserBlock from '../user-block/user-block';

type ReviewViewProps = {
  films: Film[];
}

function ReviewView(
  {
    films,
  }: ReviewViewProps,
): JSX.Element {
  const params = useParams();
  const id = Number(params.id);
  // TODO вынести в useEffect
  const {
    backgroundImage = '',
    name,
    posterImage,
  } = getFilmById(films, id) || {};

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={backgroundImage}
            alt={name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link
                  className="breadcrumbs__link"
                  to={`/films/${id}`}
                >
                  {name}
                </Link>
              </li>

              <li className="breadcrumbs__item">
                <Link
                  className="breadcrumbs__link"
                  to={`/films/${id}/review`}
                >
                  Add review
                </Link>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={posterImage}
            alt={name}
            width="218"
            height="327"
          />
        </div>
      </div>

      <ReviewForm />
    </section>
  );
}

export default ReviewView;
