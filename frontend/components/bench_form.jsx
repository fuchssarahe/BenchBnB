const React = require('react'),
      BenchActions = require('../actions/bench_actions');

const BenchForm = React.createClass({
  getInitialState: function () {
    return {description: "", num_of_seats: "", lat: this.props.location.query.lat, lng: this.props.location.query.lng };
  },

  _handleSubmit: function () {
    const bench = {
      description: this.state.description,
      numberOfSeats: parseInt(this.state.numberOfSeats),
      lat: parseFloat(this.state.lat),
      lng: parseFloat(this.state.lng)
    };
    BenchActions.createBench(bench);
  },

  _updateDescription: function (event) {
    this.setState({ description: event.target.value })
  },

  _updateNumberOfSeats: function (event) {
    this.setState({ numberOfSeats: event.target.value })
  },

  _updateLatitude: function (event) {
    this.setState({ lat: event.target.value })
  },

  _updateLongitude: function (event) {
    this.setState({ lng: event.target.value })
  },

  render: function () {
    return (
      <form onSubmit={this._handleSubmit}>
          <label>Description
            <input type="text"
                   value={this.state.description}
                   onChange={this._updateDescription} />
          </label>

          <label>Number Of Seats
            <input type="text"
                   value={this.state.numberOfSeats}
                   onChange={this._updateNumberOfSeats} />
          </label>

          <label>Latitude
            <input type="text"
                   value={this.state.lat}
                   onChange={this._updateLatitude} />
          </label>

          <label>Longitude
            <input type="text"
                   value={this.state.lng}
                   onChange={this._updateLongitude} />
          </label>

          <input type="submit"
                 value="Submit!" />
      </form>
    )
  }
});

module.exports = BenchForm;
