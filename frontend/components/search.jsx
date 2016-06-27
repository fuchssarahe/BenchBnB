const React = require('react'),
      BenchIndex = require('./bench_index'),
      BenchMap = require('./bench_map');


const Search = React.createClass({
  render: function () {
    return (
      <div>
        <BenchIndex />
        <BenchMap />
      </div>
    )
  }
});

module.exports = Search;
