

module.exports = window.util = {
  fetchAllBenches: function (bounds, callback) {
    $.ajax({
      url: 'api/benches',
      data: bounds,
      success: callback,
    });
  },

  createBench: function (bench, callback) {
    $.ajax({
      type: 'POST',
      url: 'api/benches',
      data: { bench: bench },
      success: callback,
    });
  }
}
