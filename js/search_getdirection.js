let searchControl = new L.Control.Search(); 
const directionBtn = document.getElementById('directionBtn');
const searchContainer = document.getElementById('searchContainer');
const closeSearchBtn = document.getElementById('closeSearchBtn');

// MAIN SEARCH CONTAINER ; hide when requesting for direction
document.addEventListener("DOMContentLoaded", function() {
    var searchExp = document.querySelector(".leaflet-control-search.search-exp");
  
    directionBtn.addEventListener("click", function() {
        var computedStyle = window.getComputedStyle(searchExp);
        if (computedStyle.display === "block") {
            searchExp.style.display = "none";
        } else {
            searchExp.style.display = "block";
        }
    });
});


// DIRECTION CONTAINER
directionBtn.addEventListener('click', function() {
    var searchContainer = document.querySelector(".input-container");

    // Hide direction button
    untoggleButton();

    // Show container when directionBtn is clicked
    var computedStyle = window.getComputedStyle(searchContainer);
    if (computedStyle.display === "none") {
        searchContainer.style.display = "block";
    } else {
        searchContainer.style.display = "none";
    }
});

// CLOSE BUTTON
closeSearchBtn.addEventListener('click', function() {
    // Hide the search container
    var searchContainer = document.querySelector(".input-container");
    // when close button is clicked; hide the container
    searchContainer.style.display = (searchContainer.style.display === 'none')? 'block' : 'none';
    
    // remove the text field
    // may bingago ako sasuggestions
    document.getElementById('origin-input','destination-input','suggestions').value = '';

    // when close button is clicked; show the main search
    var searchExp = document.querySelector(".leaflet-control-search.search-exp");
    if (searchExp.style.display === "block") {
        searchExp.style.display = "none";
    } else {
        searchExp.style.display = "block";
    }

    // show get direction button
    toggleButton();
});
