const React = require('react'),
      ReactDOM = require('react-dom'),
      BenchStore = window.store = require('./stores/bench_store');

$(
  () => ReactDOM.render(
    <div>hello from the dom</div>,
    document.getElementById('root')
  )
);
