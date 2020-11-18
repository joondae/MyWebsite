//Functions
/*
function loadGameContent() {
  $.ajax({url: "gameWindow.html", success: loadContent(result)});
}

function loadContent(result) {
  $("#game_content").html(result);
}
*/

$("#game_button_game_page").click(function(){
  console.log("TEST");
  $.ajax({url: "gameWindow.html", success: function(result){
    $("#game_content").html(result);
  }});
});

/*
alert("Game Content Loaded");
*/

$('#remove_game').click(function() {
  console.log("TESTTEST");
  //there's probably a more efficient way to do this
  location.href = "game.html";
})

//Events
//$("#game_button_game_page").click(loadGameContent)
