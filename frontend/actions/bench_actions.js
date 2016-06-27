const BenchAPIUtil = require('../util/bench_api_util'),
      BenchConstants = require('../constants/bench_constants'),
      Dispatcher = require('../dispatcher/dispatcher');

const BenchActions = {
  receiveAllBenches: function (benches) {
    const payload = {
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    }
    Dispatcher.dispatch(payload);
  },

  fetchAllBenches: function (bounds) {
    BenchAPIUtil.fetchAllBenches({bounds: bounds}, this.receiveAllBenches)
  }
}

module.exports = BenchActions;
