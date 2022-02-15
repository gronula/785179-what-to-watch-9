function ReviewView(): JSX.Element {
  const RATING_ITEMS = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a
              href="main.html"
              className="logo__link"
            >
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a
                  href="film-page.html"
                  className="breadcrumbs__link"
                >
                  The Grand Budapest Hotel
                </a>
              </li>

              <li className="breadcrumbs__item">
                <a
                  className="breadcrumbs__link"
                  href="add-review.html"
                >
                  Add review
                </a>
              </li>
            </ul>
          </nav>

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
              <a
                className="user-block__link"
                href="logout.html"
              >
                Sign out
              </a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src="img/the-grand-budapest-hotel-poster.jpg"
            alt="The Grand Budapest Hotel poster"
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
                  <>
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
                  </>
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
