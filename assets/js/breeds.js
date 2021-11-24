// var requestUrl = 'https://api.thedogapi.com/v1/breeds/';
// var requestUrl = "https://actmapi-actgov.opendata.arcgis.com/datasets/dog-parks/api";
var requestUrl = "https://data.actmapi.act.gov.au/arcgis/rest/services/data_extract/Community_Facilities_and_Assets/MapServer/5/query?where=1%3D1&outFields=*&outSR=4326&f=json"
// var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
    //   console.log(response);
    //   if (response.status === 200) {
    //     responseText.textContent = response.status;
    //   }
        let ids = response.json();
        console.log(ids);
        // return response.json();
  });
}

getApi(requestUrl);

// DOGGOS AND CODES
// 86 Cocker Spaniel
// 30 Basset Hound
// 31 Beagle
// 50 Border Collie
// 53 Boston Terrier
// 10 Bulldog
// 77 Chihuahua
// 91 Dachshund
// 92 Dalmatian
// 94 Dobermann Pinscher
// 115 German Sheperd
// 121 Golden Retriever
// 124 Great Dane
// 127 Greyhound
// 149 Labrador
// 168 Miniature Schnauzer
// 15 Pitbull
// 201 Pug 
// 210 Rottweiler
// 212 Saint Bernard
// 223 Shih Tzu
// 226 Siberian Husky
// 197 Poodle
// 253 Weimaraner
// 264 Yorkshire Terrier

$(document).ready(function() {
    BindControls();
});

function BindControls() {
    let breedList = [
        "Basset Hound",
        "Beagle",
        "Border Collie",
        "Boston Terrier",
        "Bulldog",
        "Chihuahua",
        "Cocker Spaniel",
        "Dachshund",
        "Dalmatian",
        "Dobermann Pinscher",
        "German Sheperd",
        "Golden Retriever",
        "Great Dane",
        "Greyhound",
        "Labrador",
        "Miniature Schnauzer",
        "Pitbull",
        "Poodle",
        "Pug",
        "Rottweiler",
        "Saint Bernard",
        "Shih Tzu",
        "Siberian Husky",
        "Weimaraner",
        "Yorkshire Terrier"
    ];

    $('#tbBreeds').autocomplete({
        source: breedList,
        minLength: 0,
        scroll: true
    }).focus(function() {
        $(this).autocomplete("search", "");
    });
}

// $("#message_submit").click(function() {
//     console.log("dogs")
// });

// WHEN PAGE LOADS - POPUP TO SELECT DOG BREED OR CANCLE TO HOMEPAGE
function deselect(e) {
    $('.pop').slideFadeToggle(function() {
        e.removeClass('selected');
    });
}

let dogBreed

$(function() {
    window.onload = function() {
        if($(this).hasClass('selected')) {
            deselect($(this));
        } else {
            $(this).addClass('selected');
            $('.pop').slideFadeToggle();
        }
      return false;
    };
  
    $('.message_submit').on('click', function() {
        dogBreed = $('#tbBreeds').val();
        deselect($(this));
        return false;
    })

    $('.close').on('click', function() {
        window.location.replace("index.html");
        return false;
    });
});
  
$.fn.slideFadeToggle = function(easing, callback) {
    return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
};