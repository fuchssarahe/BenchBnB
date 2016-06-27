const React = require('react'),
      ReactDOM = require('react-dom'),
      BenchStore = require('../stores/bench_store'),
      BenchActions = require('../actions/bench_actions');

const BenchMap = React.createClass({
  getInitialState: function () {
    return { benches: BenchStore.all() }
  },

  componentDidMount(){
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
      console.log({bounds: bounds});
      BenchActions.fetchAllBenches({bounds: bounds});
      // alert('map has moved, check console to see updated bounds')
      // console.log('center');
      // console.log(bounds.getCenter().lat(), bounds.getCenter().lng());
      // console.log("north east");
      // console.log(bounds.getNorthEast().lat(), bounds.getNorthEast().lng());
      // console.log("south west");
      // console.log(bounds.getSouthWest().lat(), bounds.getSouthWest().lng());
    });
  },

  _onChange: function (benches) {
    this.setState( {benches: BenchStore.all()} )
    Object.keys(this.state.benches).forEach(this._placeMarkers);
  },

  _placeMarkers: function (benchId) {
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
