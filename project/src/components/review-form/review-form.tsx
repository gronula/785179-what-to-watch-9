import React, { useState } from 'react';
import { RATING_ITEMS } from '../../const';

function ReviewForm(): JSX.Element {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  return (
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
                    checked={item === rating}
                    onChange={(evt) => setRating(Number(evt.target.value))}
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
            value={reviewText}
            onChange={(evt) => setReviewText(evt.target.value)}
          />

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
  );
}

export default ReviewForm;
