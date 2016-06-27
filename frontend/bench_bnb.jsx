const React = require('react'),
      ReactDOM = require('react-dom'),
      Search = require('./components/search');

$(
  () => ReactDOM.render(
    <Search />,
    document.getElementById('root')
  )
);
