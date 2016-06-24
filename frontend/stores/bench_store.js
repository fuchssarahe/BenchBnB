const Store = require('flux/utils').Store,
      Dispatcher = require('../dispatcher/dispatcher');


let _benches = {};

const BenchStore = new Store(Dispatcher);


BenchStore.resetAllBenches = function (newBenches) {
  _benches = newBenches;
}

BenchStore.all = function () {
  let allBenches = {};

  // allBenches.assign(_benches);

  Object.keys(_benches).forEach( (benchId) => {
    const benchCopy = (JSON.parse(JSON.stringify(_benches[benchId])));
    allBenches[benchId] = benchCopy;
  });

  return allBenches;
}

module.exports = BenchStore;
