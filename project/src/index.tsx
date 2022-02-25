import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <App
      films={films}
      genre="Drama"
      name="The Grand Budapest Hotel"
      releaseDate="2014"
    />
  </React.StrictMode>,
  document.getElementById('root'));
