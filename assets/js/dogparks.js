// Create a request variable and assign a new XMLHttpRequest object to it.
var requestURL = "https://data.actmapi.act.gov.au/arcgis/rest/services/data_extract/Community_Facilities_and_Assets/MapServer/5/query?where=1%3D1&outFields=*&outSR=4326&f=json"
var responseText = document.getElementById('response-text');


// this is the call for the API or the test 
function getApi(requestURL) {
  fetch (requestUrl)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        let ids = response.json();
        console.log(ids);
          // return response.json();
    });
}
getApi (requestURL);

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