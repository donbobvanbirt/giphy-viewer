import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import Layout from './components/Layout';
import Detail from './components/Detail';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout} />
      <Route path="/detail/:id" component={Detail} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
