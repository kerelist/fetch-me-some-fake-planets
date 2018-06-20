const fetchData = (url, doOnComplete) => {
  fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    if (typeof doOnComplete === 'function') {
      doOnComplete(myJson);
    }
  })
}

export default fetchData;