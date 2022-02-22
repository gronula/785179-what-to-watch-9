import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Films } from '../../types/films';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

type ReviewViewProps = {
  films: Films;
}

function ReviewView(
  { films }: ReviewViewProps,
): JSX.Element {
  const RATING_ITEMS = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  const params = useParams();
  const id = Number(params.id);
  const {
    backgroundImage = '',
    name,
    posterImage,
  } = films.find((film) => film.id === id) || {};

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

      <div className="add-review">
        <form
          action="#"
          className="add-review__form"
        >
          <div className="rating">
            <div className="rating__stars">
              {
                RATING_ITEMS.map((item) => (
                  <React.Fragment key={item}>
                    <input
                      className="rating__input"
                      id={`star-${item}`}
                      type="radio"
                      name="rating"
                      value={item}
                      checked={item === 8}
                    />
                    <label
                      className="rating__label"
                      htmlFor={`star-${item}`}
                    >
                      Rating {item}
                    </label>
                  </React.Fragment>
                ))
              }
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
            >
            </textarea>

            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ReviewView;
