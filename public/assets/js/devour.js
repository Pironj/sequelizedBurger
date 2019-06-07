// Add sound effects to different elements on the page

$(document).ready(function() {
  var audioChomp = new Audio('https://soundbible.com/mp3/Apple_Bite-Simon_Craggs-1683647397.mp3');

  $("#devourBtn").on("click", function() {
    audioChomp.play();
  });
});