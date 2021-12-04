// * * * FUNCTIONS * * * //


// ~~~~~~~~~~~~~   KAI AND ERNA   ~~~~~~~~~~~~~~~~~~//
// THIS IS FOR DOG PARKS IN RALEIGH NC - HAS ADDY, STATUS, HOURS, BATHROOM, DOG FOUNTAIN, ETC
// NOT A LOT OF PARKS BUT CAN USE TO SHOW WHAT WE ARE LOOKING FOR AND SAY MOVING FORWARD EXPAND ACROSS US? 
getApi();

function getApi() {
  fetch('https://services.arcgis.com/v400IkDOw1ad7Yad/arcgis/rest/services/DogParkLocations_Existing_PUBLIC/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')
    .then(function (response) {
      return response.json();
     
    })
    .then(function (data) {
      console.log(data.features);
      const sites = data.features.map(function (feature) {
        return {
          site: feature.attributes.SITE,
          address: feature.attributes.ADDRESS,
          hours: feature.attributes.HOURS,
          lights: feature.attributes.LIGHTS,
          bathroom: feature.attributes.BATHROOM,
          dog_water_fountain: feature.attributes.DOG_WATER_FOUNTAIN,
          agility_equipment: feature.attributes.AGILITY_EQUIPMENT,
          climbing_platform: feature.attributes.CLIMBING_PLATFORM,
          small_dog_area: feature.attributes.SMALL_DOG_AREA,
          shade: feature.attributes.SHADE,
          picnic_table: feature.attributes.PICNIC_TABLE,
          bench: feature.attributes.BENCH,
        }
      });

      console.log(sites);

// // * * * PAGE LOAD CONTROLS * * * // 
      $('suburbz').autocomplete({
        source: sites,
        minLength: 0,
        scroll: true
      });
    });
}



// GENERAL PSEUDO CODE FOR JS - SUBJECT TO CHANGE 
// 1. get the api to work +  filter for parameters we want to show - DONE 
// 2. get api info to display on page
// 3. be able to select which park we would like to display using the dropdown selecter  
// 4. be able to favorite park and save to local storage 