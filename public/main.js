//Functions
//function syntax: function functionName () {}
function goToGameContent() {
  console.log("TESTING");
  location.href = "pages/game/game.html";
}

function goToNewsFeed() {
  location.href = "pages/hobby/hobby.html";
}

function unloadContent() {
  $("#p1").html("");
}

//location.href = "rickroll url here";

//Events
//$(idName) has same functionality as document.getElementById but has more features
//$("game_button_home_page").click(goToGameContent);

//ajax calls:
//$.ajax({url: "/pages/splash.html", success: loadContent}); 
