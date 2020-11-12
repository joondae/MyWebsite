//function syntax: function functionName () {}
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

//location.href = "rickroll url here";

//Events
//$(idName) has same functionality as document.getElementById but has more features
$("#p1").click(changeSomeHtml);
$("#p1").dblclick(unloadContent);
$("#p1").mouseleave(undoDisappearingAct);

//ajax calls:
//$.ajax({url: "/pages/splash.html", success: loadContent}); 
