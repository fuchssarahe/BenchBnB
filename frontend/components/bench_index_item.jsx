const React = require('react');

const BenchIndexItem = React.createClass({
  render: function () {
    return <div>{this.props.bench.description}</div>;
  }
});


module.exports = BenchIndexItem;
