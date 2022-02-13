import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

ReactDOM.render(
  <React.StrictMode>
    <App
      filmGenre="Drama"
      filmName="The Grand Budapest Hotel"
      filmReleaseYear="2014"
    />
  </React.StrictMode>,
  document.getElementById('root'));
