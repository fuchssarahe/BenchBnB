const React = require('react'),
      BenchStore = require('../stores/bench_store'),
      BenchIndexItem = require('./bench_index_item'),
      BenchActions = require('../actions/bench_actions');

const BenchIndex = React.createClass({
  getInitialState: function () {
    return {benches: BenchStore.all() }
  },

  componentDidMount: function () {
    this.listener = BenchStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    this.setState( { benches: BenchStore.all()} );
  },

  render: function () {

    return  (
      <div>
        {
          Object.keys(this.state.benches).map( (benchId) => {
            return <BenchIndexItem key={benchId} bench={this.state.benches[benchId]} />;
          })
        }
      </div>
    )
  }
})

module.exports = BenchIndex;
