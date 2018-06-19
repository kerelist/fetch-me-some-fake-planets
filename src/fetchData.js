const fetchData = (url, params, doOnComplete) => {
  params = params !== undefined ? params : {};
  fetch(url, params)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    doOnComplete(myJson);
  });
}

export default fetchData;