var clearEl = document.getElementById("clear-button");
var MyButton = $('#history');
var userInput = $('#search-input')
    






 
$("#search-button").on("click", function(event) {
    event.preventDefault();
    $("#today").html("") 
  $('#today').css("visibility", "visible");
  var Image = ('<img id="theImg" src="./images/conures.jpg" />')
$('#today').prepend(Image);

// capitalize userInput name to make sure is in capital letters even if user inputs in lower case
})



$("#clear-button").on("click", function(event) {
    event.preventDefault();
    $("#today").html("") 
    $('#today').css("visibility", "visible");
  $('#today').prepend('<img id="theImg2" src="./images/seagull.webp" />')
  
  //   $("#forecast-header").css("visibility", "visible");
  //   $("#forecast").css("visibility", "visible");
  
  
  // capitalize userInput name to make sure is in capital letters even if user inputs in lower case
  })
  
