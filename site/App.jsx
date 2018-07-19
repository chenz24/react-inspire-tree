import React from 'react'; // eslint-disable-line
import { hot } from 'react-hot-loader'; // eslint-disable-line
import { browserHistory as history, Router } from 'react-router';
import routes from './routes';
import './scss/main.scss';

const App = () => (
  <div className='App'>
    <Router history={history} routes={routes} key={Math.random()} />
  </div>
);

export default hot(module)(App);
