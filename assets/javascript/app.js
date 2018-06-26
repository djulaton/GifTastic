//form is displayed on screen with an input and submit button

//there are also buttons that appear on the screen from the character array

//each button will display max 10 gifs and ratings

//all gifs will be still unless user clicks on the image

//when the image is clicked, the image will animate

//when clicked again, image will be still

//when user inputs a choice and submits, add button to screen and allow them to click the added button and view 10 max images and display ratings

//create global variables

var characterArray = ["black ranger", "pink ranger", "yellow ranger", "green ranger", "red ranger", "blue ranger", "rita repulsa", "zordon", "alpha 5", "bulk and skull"];

var queryURL = "https://api.giphy.com/v1/gifs/search?&q=" + characterArray + 
"&rating=PG&lang=en&api_key=bLGuPuEQa3pGIFR5h8MvxFwOFQg9ScJc&limit=10";

// function for displaying movie data
function renderButtons() {
    $("#powerRangers-view").empty();

    for(var i=0; i < characterArray.length; i++) {
      $("#powerRangers-view").append("<button>" + characterArray[i] + "</button>")
    }
}

$("#add-ranger").on("click", function(event){
    event.preventDefault();

    var newRanger = $("#ranger-input").val();
    characterArray.push(newRanger);

    renderButtons();
});

renderButtons();






