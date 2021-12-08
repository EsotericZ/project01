let favBreed = [];
let favPark = [];

$(function() {
    if (localStorage.getItem("Breeds") === null) {
        favBreed = ['No Favorite Breeds!'];
    } else {
        favBreed = JSON.parse(localStorage.getItem("Breeds")) || [];
    }
    
    if (localStorage.getItem("favParks") === null) {
        favPark = [{site: 'No Favorite Parks!'}];
    } else {
        favPark = JSON.parse(localStorage.getItem("favParks")) || [];
    }
    addFavs()
})

function addFavs() {
    for (let i = 0; i < favBreed.length; i++) {
        $("#db"+i).append(favBreed[i]);
        $("#db"+i).removeClass('hidden');
    }

    for (let i = 0; i < favPark.length; i++) {
        $("#dp"+i).append(favPark[i].site);
        $("#dp"+i).removeClass('hidden');
    }
}

