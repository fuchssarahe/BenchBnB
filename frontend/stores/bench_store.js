const Store = require('flux/utils').Store,
      Dispatcher = require('../dispatcher/dispatcher'),
      BenchConstants = require('../constants/bench_constants');


let _benches = {};

const BenchStore = new Store(Dispatcher);


BenchStore.resetAllBenches = function (newBenches) {
  _benches = newBenches;
  this.__emitChange();
}

BenchStore.all = function () {
  let allBenches = {};

  Object.keys(_benches).forEach( (benchId) => {
    const benchCopy = (JSON.parse(JSON.stringify(_benches[benchId])));
    allBenches[benchId] = benchCopy;
  });

  return allBenches;
}

BenchStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      BenchStore.resetAllBenches(payload.benches);
      break;
    default:

  }
}

module.exports = BenchStore;
