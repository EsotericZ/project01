// * * * FUNCTIONS * * * //
let parkData;

let sites;
getApi();

// this gets the API for the dog park attributes and filters info by what we want
function getApi() {
  fetch('https://services.arcgis.com/v400IkDOw1ad7Yad/arcgis/rest/services/DogParkLocations_Existing_PUBLIC/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      parkData = data.features;
      sites = data.features.map(function (feature) {
        return {
          site: feature.attributes.SITE,
          address: feature.attributes.ADDRESS,
          hours: feature.attributes.HOURS_OPEN,
          lights: feature.attributes.LIGHTS,
          bathroom: feature.attributes.BATHROOM,
          dog_water_fountain: feature.attributes.DOG_WATER_FOUNTAIN,
          agility_equipment: feature.attributes.AGILITY_EQUIPMENT,
          climbing_platform: feature.attributes.CLIMBING_PLATFORM,
          small_dog_area: feature.attributes.SMALL_DOG_AREA,
          shade: feature.attributes.SHADE,
          picnic_table: feature.attributes.PICNIC_TABLE,
          bench: feature.attributes.BENCH,
          park_ID: feature.attributes.PARKID,
        }
      });
    });
}

let park;

// this allows the drop down items from the drop down menu created in HTML to call the function parkInfo
$('.dropdown-item').each(function () {
  $(this).on('click', function () {
    park = this.innerHTML;
    parkInfo()
  })
})

let a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12;

// this associates the drop down item to the site info from the API
function parkInfo() {
  for (let i = 0; i < sites.length; i++) {
    if (sites[i].site == park) {
      favoritePark = sites[i];
      a1 = sites[i].site;
      a2 = sites[i].address;
      a3 = sites[i].hours;
      a4 = sites[i].lights;
      a5 = sites[i].bathroom;
      a6 = sites[i].dog_water_fountain;
      a7 = sites[i].agility_equipment;
      a8 = sites[i].climbing_platform;
      a9 = sites[i].small_dog_area;
      a10 = sites[i].shade;
      a11 = sites[i].picnic_table;
      a12 = sites[i].bench;
    }
  }

  // this displays the inforamtion from the API dog park attributes to the page
  console.log(favoritePark);
  $('#parkAtt').empty();
  $('#parkAtt').append(`<li id="dogParkName"> <i class="fas fa-paw"></i> Name of Dog Park: ${a1}</li>`)
  $('#parkAtt').append(`<li class="dogParkInfo"> <i class="fas fa-bone"></i> Address: ${a2} </li>`);
  $('#parkAtt').append(`<li class="dogParkInfo"> <i class="fas fa-bone"></i> Hours of Operation: ${a3}</li>`);
  $('#parkAtt').append(`<li class="dogParkInfo"> <i class="fas fa-bone"></i> Lights: ${a4}</li>`);
  $('#parkAtt').append(`<li class="dogParkInfo"> <i class="fas fa-bone"></i> Bathrooms: ${a5}</li>`);
  $('#parkAtt').append(`<li class="dogParkInfo"> <i class="fas fa-bone"></i> Dog Water Fountain: ${a6}</li>`);
  $('#parkAtt').append(`<li class="dogParkInfo"> <i class="fas fa-bone"></i> Agility Equipment: ${a7}</li>`);
  $('#parkAtt').append(`<li class="dogParkInfo"> <i class="fas fa-bone"></i> Climbing Platform: ${a8}</li>`);
  $('#parkAtt').append(`<li class="dogParkInfo"><i class="fas fa-bone"></i> Small Dog Area: ${a9}</li>`);
  $('#parkAtt').append(`<li class="dogParkInfo"> <i class="fas fa-bone"></i> Shade: ${a10}</li>`);
  $('#parkAtt').append(`<li class="dogParkInfo"> <i class="fas fa-bone"></i> Picnic Table: ${a11}</li>`);
  $('#parkAtt').append(`<li class="dogParkInfo"> <i class="fas fa-bone"></i> Bench: ${a12}</li>`);
  $("#favParks").attr("class", "form-control fav");
}

// MAP API
let map;

// Favorite Parks - Local Storage
var favoritePark;
var favParks;
if (localStorage.getItem("favParks")) {
  favParks = JSON.parse(localStorage.getItem("favParks"));
} else {
  favParks = [];
}
var favPark = document.getElementById("favParks");
favPark.addEventListener("click", function () {
  favParks.push(favoritePark);
  localStorage.setItem("favParks", JSON.stringify(favParks))
})

var parks = document.querySelectorAll(".park")
for (let i = 0; i < parks.length; i++) {
  parks[i].addEventListener("click", selectPark)
}
function selectPark(event) {
  var parks = document.querySelectorAll(".park2");
  for (let j = 0; j < parks.length; j++) {
    parks[j].classList.add("hidden");
  }
  for (let i = 0; i < parkData.length; i++) {
    if (event.target.innerText == parkData[i].attributes.SITE) {
      console.log(parkData[i].attributes.PARKID);
      var id = parkData[i].attributes.PARKID;
      var map = document.getElementById(`park${id}`);
      map.classList.remove("hidden");
    }
  }

}