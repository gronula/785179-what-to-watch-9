import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app/app';
import { films } from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        films={films}
        genre="Drama"
        name="The Grand Budapest Hotel"
        releaseDate="2014"
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
