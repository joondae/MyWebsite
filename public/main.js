//Functions
//function syntax: function functionName () {}
function changeBackground() {
  if(document.getElementById("background_image").src == "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e7d2bd61228185.5a67a07360e75.gif") {
    //change background
    document.getElementById("background_image").src = "https://i.imgur.com/VKCh9Hc.gif";

    //change text colors
    document.getElementById("website_repo_link").style.color = "#A9A9A9";
    document.getElementById("tech_spec_link").style.color = "#A9A9A9";
    document.getElementById("github_repo_link").style.color = "#F08080";
    document.getElementById ("p1").style.color = "#728C69";

    //change dark/light mode button icon (Jasmine could add the moon but couldn't remove the sun)
    //document.getElementById("button").removeClas("far fa-sun").addClass("fas fa-moon-stars");
    //document.getElementById("button").html("<button id="button"><i class="fas fa-moon-stars"></i></button>")

    //change dark/light mode button & social icons to black (Jasmine thinks there's a more efficient way to do this but she failed)
    document.getElementById("button").style.color = "black";
    document.getElementById("instagram_button").style.color = "black";
    document.getElementById("facebook_button").style.color = "black";
    document.getElementById("github_button").style.color = "black";
    document.getElementById("linkedin_button").style.color = "black";

    //change footer to light gray
    document.getElementById("social-links").style.backgroundColor = "rgb(216,216,216,0.8)";
  }
  else /*if currently in light mode*/ {
    //change background
    document.getElementById("background_image").src = "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e7d2bd61228185.5a67a07360e75.gif";

    //change text colors
    document.getElementById("website_repo_link").style.color = "rgb(255,20,147)";
    document.getElementById("tech_spec_link").style.color = "rgb(255,20,147)";
    document.getElementById("github_repo_link").style.color = "rgb(127,255,0)";
    document.getElementById("p1").style.color = "rgb(255,20,147)";

    //change dark/light mode button icon (Jasmine couldn't figure this out)
    document.getElementById("button").removeClass("far fa-moon").addClass("far fa-sun");

    //change dark/light mode button to white
    document.getElementById ("button").style.color = "white";

    //change footer to light pink
    document.getElementById ("social-links").style.backgroundColor = "rgb(255,192,203,0.2)";

    //change all social icons to white
    document.getElementById("instagram_button").style.color = "white";
    document.getElementById("facebook_button").style.color = "white";
    document.getElementById("github_button").style.color = "white";
    document.getElementById("linkedin_button").style.color = "white";
  }
}

function goToInstagram (){
  window.location.href = "http://instagram.com/max.hahnn";
}

function goToFacebook (){
  window.location.href = "https://facebook.com/max.hahn.104/";
}


function goToGithub (){
  window.location.href = "https://github.com/joondae?tab=repositories";
}


function goToLinkedin (){
  window.location.href = "https://br.pinterest.com/pin/810788739149485431/";
}



function goToGameContent() {
  console.log("TESTING");
  location.href = "pages/game/game.html";
}

function goToNewsFeed() {
  location.href = "pages/hobby/hobby.html";
}

function unloadContent() {
  //$("#p1").html("");
}

//location.href = "rickroll url here";

//Events
//$(idName) has same functionality as document.getElementById but has more features
//$("game_button_home_page").click(goToGameContent);
$("#button").click(changeBackground);
$("#instagram_button").click(goToInstagram);
$("#facebook_button").click(goToFacebook);
$("#github_button").click(goToGithub);
$("#linkedin_button").click(goToLinkedin);

//ajax calls:
//$.ajax({url: "/pages/splash.html", success: loadContent}); 
