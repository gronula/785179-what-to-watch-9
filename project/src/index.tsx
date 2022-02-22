import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <App
      filmGenre="Drama"
      filmName="The Grand Budapest Hotel"
      filmReleaseYear="2014"
      films={films}
    />
  </React.StrictMode>,
  document.getElementById('root'));
