const React = require('react'),
      ReactDOM = require('react-dom'),
      BenchStore = require('../stores/bench_store'),
      BenchActions = require('../actions/bench_actions');

const BenchMap = React.createClass({
  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  componentDidMount(){
    this.markers = {};

    BenchStore.addListener(this._onChange)
    // create map
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    google.maps.event.addListener(this.map, 'idle', () => {
      const bounds = this.map.getBounds();

      const processedBounds = {
        NE: {
          lat: bounds.getNorthEast().lat(),
          lng: bounds.getNorthEast().lng()
        },

        SW: {
          lat: bounds.getSouthWest().lat(),
          lng: bounds.getSouthWest().lng()
        }
      };
      this.bounds = processedBounds;
      BenchActions.fetchAllBenches(processedBounds);
    });
  },

  _onChange: function (benches) {
    this.setState( { benches: BenchStore.all() } );
    Object.keys(this.markers).forEach(this._removeBadMarker);
    Object.keys(this.state.benches).forEach(this._placeMarker);
  },

  _placeMarker: function (benchId) {
    if (this.markers[benchId]) return;

    const bench = this.state.benches[benchId];

    const pos = new google.maps.LatLng(bench.lat, bench.lng)
          //then we use our new instance of LatLng to make a marker
    const marker = new google.maps.Marker({
            position: pos,
            //set map to this.map, this is what adds it to the map
            //when we want to remove this marker, we need to set its
            //map property to null using myMarker.setMap(null)
            map: this.map
          });
    this.markers[benchId] = marker;
  },

  _removeBadMarker: function (benchId) {
    const marker = this.markers[benchId];

    if (!this._isInBounds(marker)) {
      marker.setMap(null);
      delete this.markers[benchId];
    }
  },

  _isInBounds: function (marker) {
    const lat = marker.position.lat();
    const lng = marker.position.lng();

    if (lat >= this.bounds.SW.lat
        && lat <= this.bounds.NE.lat
          && lng >= this.bounds.SW.lng
            && lng <= this.bounds.NE.lng) {
      return true;
    }

    return false;
  },

  render: function () {
    return (
      <div className='map' ref='map'>
      </div>
    )
  }
});

module.exports = BenchMap;

// AIzaSyDqxAV9Na87a-IodJlt_wfGIGzjhziDvMQ
