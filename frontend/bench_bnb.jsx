import { Router, Route, IndexRoute, hashHistory } from 'react-router';
const React = require('react'),
      ReactDOM = require('react-dom'),
      App = require('./components/app'),
      Search = require('./components/search');

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Search}/>
    </Route>
  </Router>
);


$(
  () => ReactDOM.render(
    router,
    document.getElementById('root')
  )
);
