var requestURL = "https://data.actmapi.act.gov.au/arcgis/rest/services/data_extract/Community_Facilities_and_Assets/MapServer/5/query?where=1%3D1&outFields=*&outSR=4326&f=json"
var responseText = document.getElementById('response-text');

function getApi(requestURL) {
  fetch (requestUrl)
    .then(function (response)) {
      console.log(response);
      if (response.status === 200) {
        reponseText = response.json();
        SVGComponentTransferFunctionElement.log(ids);
          return response.json();
      });
    }
}
getApi (requestURL);