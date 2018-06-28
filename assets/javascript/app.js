//form is displayed on screen with an input and submit button

//there are also buttons that appear on the screen from the character array

//each button will display max 10 gifs and ratings

//all gifs will be still unless user clicks on the image

//when the image is clicked, the image will animate

//when clicked again, image will be still

//when user inputs a choice and submits, add button to screen and allow them to click the added button and view 10 max images and display ratings

//create global variables

var characterArray = ["black power ranger", "pink power ranger", "yellow power ranger", "green power ranger", "red power ranger", "blue power ranger", "rita repulsa", "zordon from power rangers", "alpha 5", "bulk and skull"];

function displayRangerInfo() {

    var ranger = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?&q=" + ranger + 
"&rating=PG&lang=en&api_key=bLGuPuEQa3pGIFR5h8MvxFwOFQg9ScJc&limit=10";

// creating an AJAX call for the specific ranger button being clicked
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){

    var results = response.data;

    for(var i=0; i < results.length; i++) {

    // creating a div to hold the ranger result
    var rangerDiv = $("<div class='ranger'>");

    // storing the rating data
    var rating = results[i].rating;

    // Creating an element to have the rating displayed
    var pOne = $("<p>").text("Rating: " + rating);

    // Displaying the rating
    rangerDiv.append(pOne);

    // retrieving the URL for the image
    // var imgURL = results[i].images.fixed_height_still.url;

    // var image = $("<img>").attr("src", imgURL);

    var image = $("<img>");
    image.attr({
        "src": results[i].images.fixed_height_still.url,
        "data-state": "still",
        "data-still": results[i].images.fixed_height_still.url,
        "data-animate": results[i].images.fixed_height.url,
    });

    // create click function for image
    image.on("click", function() {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    })

    // appending the image
    rangerDiv.prepend(image);

    // rangerDiv.append(image);

    // putting the entire ranger image aboe the previouse gifs
    $("#powerRangers-view").prepend(rangerDiv);
    }
});

}

// function for displaying movie data
function renderButtons() {
    $("#buttons-view").empty();

    for(var i=0; i < characterArray.length; i++) {
    //   $("#powerRangers-view").append("<button>" + characterArray[i] + "</button>")

    var a = $("<button>");
    //adding a class of ranger-btn to button
    a.addClass("ranger-btn");
    // adding a data-attribute
    a.attr("data-name", characterArray[i]);
    // providing the initial button text
    a.text(characterArray[i]);
    // adding the button to the buttons-view div
    $("#buttons-view").append(a);
    }
}

$("#add-ranger").on("click", function(event){
    event.preventDefault();

    var newRanger = $("#ranger-input").val().trim();
    characterArray.push(newRanger);

    renderButtons();
});

// adding a click even listener to all elements with a class of "ranger-btn"
$(document).on("click", ".ranger-btn", displayRangerInfo);

renderButtons();






