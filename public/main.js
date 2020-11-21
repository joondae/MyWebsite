//Functions
//function syntax: function functionName () {}
function goToGameContent() {
  console.log("TESTING");
  location.href = "pages/game.html";
}

function unloadContent() {
  $("#p1").html("");
}

function changeSomeHtml() {
  $("#p1").html("DOUBLE CLICK FOR DISAPPEARING ACT");
};

function undoDisappearingAct() {
  $("#p1").html("poof");
};



function changeBackground() {
  if (document.getElementById("Background").src == "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e7d2bd61228185.5a67a07360e75.gif")
  {
    //change background
     document.getElementById("Background").src = "https://i.imgur.com/VKCh9Hc.gif";
     //change text colors
     document.getElementById ("website_repo_link").style.color = "#A9A9A9";
     document.getElementById ("tech_spec_link").style.color = "#A9A9A9";
     document.getElementById ("github_repo_link").style.color = "#F08080";
     document.getElementById ("p1").style.color = "#728C69";
     //change icon - i cant for the life of me figure out how to remove the sun (adding the moon works))
       //document.getElementById ("button").removeClass("far fa-sun").addClass ("fas fa-moon-stars");
       //document.getElementById ("button").className ("fas fa-moon-stars");
       //$("#button").removeClass();
       //$("#button").addClass ("far fa-moon");

     //change all sun & social icons to black: theres prob a more efficient way to do this but my attempts failed :(
     document.getElementById ("button").style.color = "black";
     document.getElementById ("instagram").style.color = "black";
     document.getElementById ("facebook").style.color = "black";
     document.getElementById ("github").style.color = "black";
     document.getElementById ("linkedin").style.color = "black";

     //change footer to light grey
     document.getElementById ("social-links").style.backgroundColor = "rgb(216, 216, 216, 0.8)";

  }
  else //if currently in light mode
  {
      //change background back
      document.getElementById("Background").src = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e7d2bd61228185.5a67a07360e75.gif";

      //change text colors
      document.getElementById ("website_repo_link").style.color = "rgb(255, 20, 147)";
      document.getElementById ("tech_spec_link").style.color = "rgb(255, 20, 147)";
      document.getElementById ("github_repo_link").style.color = "rgb(127, 255, 0)";
      document.getElementById ("p1").style.color = "rgb(255, 20, 147)";

      //change button to dark version
      //$("#button").removeClass("far fa-moon").addClass ("far fa-sun");
      document.getElementById ("button").style.color = "white";

      //change footer to light pink
      document.getElementById ("social-links").style.backgroundColor = "rgb(255, 192, 203, 0.2)";

      //change all social icons to white
      document.getElementById ("instagram").style.color = "white";
      document.getElementById ("facebook").style.color = "white";
      document.getElementById ("github").style.color = "white";
      document.getElementById ("linkedin").style.color = "white";
  }

}

function goInstagram (){
  window.location.href = "http://instagram.com";
}
$("#instagram").click(goInstagram);

function goFacebook (){
  window.location.href = "https://www.youtube.com/watch?v=oHg5SJYRHA0&ab_channel=cotter548";
}
$("#facebook").click(goFacebook);

function goGithub (){
  window.location.href = "https://www.youtube.com/watch?v=YddwkMJG1Jo&ab_channel=Rickroll%2Cbutwithadifferentlink";
}
$("#github").click(goGithub);

function goLinkedin (){
  window.location.href = "https://br.pinterest.com/pin/810788739149485431/";
}
$("#linkedin").click(goLinkedin);
//location.href = "rickroll url here";

//Events
//$(idName) has same functionality as document.getElementById but has more features
$("#p1").click(changeSomeHtml);
$("#p1").dblclick(unloadContent);
$("#p1").mouseleave(undoDisappearingAct);
$("game_button_home_page").click(goToGameContent);
$("#button").click(changeBackground);

//ajax calls:
//$.ajax({url: "/pages/splash.html", success: loadContent}); 
