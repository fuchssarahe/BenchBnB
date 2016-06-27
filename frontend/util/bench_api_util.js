module.exports = {
  fetchAllBenches: function (bounds, callback) {
    $.ajax({
      url: 'api/benches',
      data: bounds,
      success: callback,
    });
  },

  createBench: function (callback) {
    $.post({
      url: 'api/benches',
      data: {
        bench: {
          description: "Bench found in the bay",
          lat: 37.794680,
          lng: -122.397546
        }
      },
      success: callback,
    });
  }
}
