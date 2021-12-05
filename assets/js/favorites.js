let favBreed = [];
let favPark = [];

$(function() {
    if (localStorage.getItem("Breeds") === null) {
        favBreed = ['No Favorite Breeds!'];
    } else {
        favBreed = JSON.parse(localStorage.getItem("Breeds")) || [];
    }
    
    if (localStorage.getItem("Parks") === null) {
        favPark = ['No Favorite Parks!'];
    } else {
        favPark = JSON.parse(localStorage.getItem("Parks")) || [];
    }
    addFavs()
})

function addFavs() {
    for (let i = 0; i < favBreed.length; i++) {
        $("#db"+i).append(favBreed[i]);
        $("#db"+i).removeClass('hidden');
    }

    for (let i = 0; i < favPark.length; i++) {
        $("#dp"+i).append(favPark[i]);
        $("#dp"+i).removeClass('hidden');
    }
}