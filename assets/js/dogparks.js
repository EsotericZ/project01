fetch('https://data.actmapi.act.gov.au/arcgis/rest/services/data_extract/Community_Facilities_and_Assets/MapServer/5/query?where=1%3D1&outFields=*&outSR=4326&f=json', {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
  .then(function (response) {
    console.log(response);
    // var features = response.features[4];

    return response.json();
  })
  .then(function (data) {
    console.log(data);
        for (let i = 0; i < data.features.length; i++) {
        console.log(data.features[i]);
        };
  });

// api that takes in parameter of city or zipcode 
// click on submit - save as variable, pass the variable as a query parameter

// see how or if it lets you use zip/city parameters (with current api or new api)



// this is the javascript from MDBootstrap for the Search button  with events
// so we can add in an event for the zip code? not sure if this is correct -- 
// feel free to change
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    searchButton.addEventListener('click', () => {
    const inputValue = searchInput.value;
    alert(inputValue);
    });


// GENERAL PSEUDO CODE FOR JS - SUBJECT TO CHANGE 
// 1. get the api to work
// 2. be able to  filter the api/map for dog parks by zip code
// 3. make the search button display only results for the zipcode selected
// 3.a. make sure that the search bar text field deletes the default code when we type 
//      in the search parameters 
// 4. be able to favorite park and save to local storage 