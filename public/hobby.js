function requestBlogArticleContent() {
  //load blogArticles.json
  $.ajax({
    dataType: "json",
    url: "https://firebasestorage.googleapis.com/v0/b/advancedtopicscs.appspot.com/o/blogArticles.json?alt=media&token=478d06a6-d7e5-4cac-a92d-7670dea8de17",
    success: loadBlogArticleContentJSONAsHTML
  });

  console.log("request function complete");
}

function loadBlogArticleContentJSONAsHTML(result) {
  $("#blogArticleButton").hide();

  var htmlToLoad="";

  for(var i = 0; i < result.length; i++) {
    var nextResult = result[i];

    htmlToLoad += "<div><h3><a>" + nextResult["headline"] + "</a></h3>" + nextResult["author"] + "  |  " + nextResult["date"].substring(0, (nextResult["date"].length - 6)/2) + "  |  Likes: " + nextResult["numberOfLikes"] + "</div>";
  }

  //Set the HTML
  //$("#testParagraph").html(htmlToLoad);
  $("#blogArticles").html(htmlToLoad);

  console.log("load function complete");
}

$("#blogArticleButton").click(requestBlogArticleContent);
