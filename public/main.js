//function syntax: function functionName () {}
function goToGameContent() {
  console.log("TESTING");
  location.href = "pages/game.html";
}

function unloadContent() {
  $("#p1").html("");
}

function changeSomeHtml() {
  //very common for all websites
  $("#p1").html("DOUBLE CLICK FOR DISAPPEARING ACT");
};

function undoDisappearingAct() {
  $("#p1").html("poof");
};

function populatePlaceContent(content) {

}

function loadContent() {
  $.ajax({ url: "pages/game.html", success: populatePlaceContent})
}

//location.href = "rickroll url here";

//Events
//$(idName) has same functionality as document.getElementById but has more features
$("#p1").click(changeSomeHtml);
$("#p1").dblclick(unloadContent);
$("#p1").mouseleave(undoDisappearingAct);
$("game_button_home_page").click(goToGameContent);

//ajax calls:
//$.ajax({url: "/pages/splash.html", success: loadContent}); 
