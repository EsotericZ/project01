let allBreeds = [
    ["Cocker Spaniel", 86, 121, 9, 127, 9, 149, 9, 30, 8, 50, 8, 15, 1],
    ["Basset Hound", 30, 31, 8, 50, 8, 127, 8, 53, 7, 168, 7, 92, 1],
    ["Beagle", 31, 121, 9, 127, 9, 149, 9, 30, 8, 50, 8, 15, 1],
    ["Border Collie", 50, 115, 9, 124, 9, 30, 8, 31, 8, 53, 8, 15, 1],
    ["Boston Terrier", 53, 77, 9, 91, 9, 121, 9, 124, 9, 127, 9, 10, 2],
    ["Bulldog", 10, 127, 6, 212, 5, 168, 4, 50, 3, 91, 3, 77, 1],
    ["Chihuahua", 77, 53, 9, 127, 9, 264, 9, 201, 8, 30, 6, 10, 1],
    ["Dachshund", 91, 53, 9, 121, 8, 149, 8, 30, 7, 31, 7, 15, 1],
    ["Dalmatian", 92, 31, 8, 86, 8, 253, 8, 197, 7, 168, 6, 15, 1],
    ["Dobermann Pinscher", 94, 121, 8, 149, 8, 226, 7, 92, 6, 124, 6, 31, 1],
    ["German Shepherd", 115, 50, 9, 53, 8, 149, 8, 168, 8, 50, 8, 201, 1],
    ["Golden Retriever", 121, 31, 9, 53, 9, 127, 9, 149, 9, 168, 9, 15, 1],
    ["Great Dane", 124, 50, 9, 53, 9, 226, 8, 86, 7, 121, 7, 15, 1],
    ["Greyhound", 127, 31, 9, 53, 9, 77, 9, 121, 9, 127, 9, 10, 1],
    ["Labrador", 149, 121, 10, 31, 9, 53, 9, 127, 9, 212, 9, 15, 1],
    ["Miniature Schnauzer", 168, 50, 9, 53, 9, 121, 9, 149, 9, 115, 8, 201, 1],
    ["Pitbull", 15, 86, 1, 30, 1, 31, 1, 50, 1, 53, 1, 10, 1],
    ["Pug", 201, 91, 9, 121, 9, 124, 9, 127, 9, 149, 9, 15, 1],
    ["Rottweiler", 210, 50, 7, 92, 6, 115, 6, 226, 6, 86, 5, 10, 1],
    ["Saint Bernard", 212, 115, 7, 197, 7, 253, 7, 86, 6, 94, 6, 15, 1],
    ["Shih Tzu", 223, 197, 8, 127, 7, 264, 7, 121, 6, 149, 6, 15, 1],
    ["Siberian Husky", 226, 223, 9, 124, 8, 94, 7, 127, 7, 264, 7, 10, 1],
    ["Poodle", 197, 53, 9, 201, 9, 121, 8, 149, 8, 92, 7, 15, 1],
    ["Weimaraner", 253, 86, 9, 115, 9, 121, 9, 149, 9, 253, 9, 10, 1],
    ["Yorkshire Terrier", 264, 77, 9, 50, 8, 168, 8, 30, 7, 31, 7, 15, 1]
];

var requestUrl = 'https://api.thedogapi.com/v1/breeds/';
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
        "German Shepherd",
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

// WHEN PAGE LOADS - POPUP TO SELECT DOG BREED OR CANCLE TO HOMEPAGE
function deselect(e) {
    $('.pop').slideFadeToggle(function() {
        e.removeClass('selected');
    });
}

let dogBreed, dogBreedNo, cmp1, cmpNo1, cmp2, cmpNo2, cmp3, cmpNo3, cmp4, cmpNo4, cmp5, cmpNo5, cmpL, cmpNoL

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
        dogInfo();
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

let compBreedNo = [];
let compStrength = [];
let compBreed = [];

function dogInfo() {
    for (let i = 0; i < allBreeds.length; i++) {
        if (allBreeds[i][0] === dogBreed) {
            dogBreedNo = allBreeds[i][1];
            cmp1 = allBreeds[i][2];
            cmpNo1 = allBreeds[i][3];
            cmp2 = allBreeds[i][4];
            cmpNo2 = allBreeds[i][5];
            cmp3 = allBreeds[i][6];
            cmpNo3 = allBreeds[i][7];
            cmp4 = allBreeds[i][8];
            cmpNo4 = allBreeds[i][9];
            cmp5 = allBreeds[i][10];
            cmpNo5 = allBreeds[i][11];
            cmpL = allBreeds[i][12];
            cmpNoL = allBreeds[i][13];
            compBreedNo.push(cmp1, cmp2, cmp3, cmp4, cmp5, cmpL);
            compStrength.push(cmpNo1, cmpNo2, cmpNo3, cmpNo4, cmpNo5, cmpNoL);
        }
    }

    for (let i = 0; i < compBreedNo.length; i++) {
        for (let j = 0; j < allBreeds.length; j++) {
            if (compBreedNo[i] === allBreeds[j][1]) {
                addb = allBreeds[j][0];
                compBreed.push(addb);
            }
        }
    }

    $(".container").append(`<strong>${dogBreed}</strong>`);
    for (let i = 0; i < compBreed.length; i++) {
        $(".container").append(`<li>${compBreed[i]}      ${compStrength[i]}</li>`);
    }
}