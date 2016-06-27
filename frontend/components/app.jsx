const React = require('react');

const App = React.createClass({
  render: function () {
    return (
      <div>
        <header><h1>Bench BnB</h1></header>
        {this.props.children}
      </div>
    );
  }
});

  module.exports = App;
