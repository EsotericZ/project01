// // Create a request variable and assign a new XMLHttpRequest object to it.
// var requestURL = "https://data.actmapi.act.gov.au/arcgis/rest/services/data_extract/Community_Facilities_and_Assets/MapServer/5/query?where=1%3D1&outFields=*&outSR=4326&f=json"
// var responseText = document.getElementById('response-text');

// function getApi(requestURL) {
//   fetch (requestUrl)
//     .then(function (response) {
//       console.log(response);
//       if (response.status === 200) {
//         let ids = response.json();
//         console.log(ids);
//           // return response.json();
//     });
// }
// getApi (requestURL);

// var requestUrl = "https://data.actmapi.act.gov.au/arcgis/rest/services/data_extract/Community_Facilities_and_Assets/MapServer/5/query?where=1%3D1&outFields=*&outSR=4326&f=json"
// var responseText = document.getElementById('response-text');

// function getApi(requestUrl) {
//   fetch(requestUrl)
//     .then(function (response) {
//       console.log(response);
//       if (response.status === 200) {
//         responseText.textContent = response.status;
//       }
//         let ids = response.json();
//         console.log(ids);
//         // return response.json();
//   });
// }

// getApi(requestUrl);