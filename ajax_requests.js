ajx requests:


$.ajax({
  url: 'api/benches',
  success: (resp) => {console.log(resp);},
  error: (resp) => {console.log('error!'); console.log(resp);}
})

$.post({
  url: 'api/benches',
  data: {
    bench: {
      description: "Bench found in the bay",
      lat: 37.794680,
      lng: -122.397546
    }
  },
  success: (resp) => {console.log(resp);},
  error: (resp) => {console.log('error!'); console.log(resp);}
})
