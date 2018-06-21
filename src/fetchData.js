const fetchData = async (url, doOnComplete) => {
  await fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

    //this runs an async function that runs a loop through the results array
    return getFilmsDataObjects(data).then(function() {
      //return data object that now has individual films' data objects replacing original API URLs
      return data;
    });

  })
  .then(function(adjustedData) {
    //safety check to make sure we've sent a callback that's a function
    if (typeof doOnComplete === 'function') {
      //after all API calls done & object modified to include films data, return object
      doOnComplete(adjustedData);
    }
  })
}

const getFilmsDataObjects = async function(data) {
  
  return await Promise.all(data.results.map(async (result, index) => {

    //this runs a second async function that rund through the films array of each result
    return await getFilmObject(result, index, data)
    .then(function(newFilmObject) {
      //once you have the individual film object, clear film URL at this index point
      delete data.results[index].films 
      //then, give that films key a new films array with all of the returned API info
      data.results[index].films = newFilmObject;

      //once newFilmObject added to base data object, end async with return
      return;
    })
  }))
};

const getFilmObject = async function(result, resultIndex, fullDataSet) {
  //init empty films array to hold individual film data for each new results index
  const films = [];

  //map films to return API info for one single film at a time
  await Promise.all(result.films.map(async (film, index) => {
    // const filmIndex = index;
    
    await fetch(film)
    .then(function(newFilmData) {
      return newFilmData.json();
    })
    .then(function(newFilmObj) {

      //when data is returned and after converting to json, push data onto initialised films array
      films.push(newFilmObj);
      //this changes the initial data object to replace film URLs with the fetched data from that URL
      // delete fullDataSet.results[resultIndex].films[filmIndex]
    })
  }));
  //once async map call is done, return full films array
  return films;
};

export default fetchData;