var clearEl = document.getElementById("clear-button");
var MyButton = $('#history');
var userInput = $('#search-input')
    








 
$("#red-button").on("click", function(event) {
    event.preventDefault();
    $("#today").html("") 
  $('#today').css("visibility", "visible");
  var Image = ('<img id="theImg" src="./images/conures.jpg" />')
$('#today').prepend(Image);


})



$("#blue-button").on("click", function(event) {
    event.preventDefault();
    $("#today").html("") 
    $('#today').css("visibility", "visible");
  $('#today').prepend('<img id="theImg2" src="./images/seagull.webp" />')
  })

  $("#orange-button").on("click", function(event) {
    event.preventDefault();
    $("#today").html("") 
    $('#today').css("visibility", "visible");
  $('#today').prepend('<img id="theImg2" src="./images/albatross.jpeg" />')
  })

  
  
