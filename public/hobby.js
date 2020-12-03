function loadWIREDRss(result) {
  result = xmlToJson(result);
  var items = result['rss']['channel']['item'];
  console.log(items);
  //var rand = Math.round(Math.random() * 1000000) % 50;
  var rand = Math.round(Math.random() * (Object.keys(items).length - 1)) % 50;
  //console.log(rand);

  var htmlStr = "";
  for(var i = 0; i < items.length; i++) {
    if(rand == i) {
      htmlStr += '<img src="' + items[i]['media:thumbnail']['@attributes']['url'] + '"style="max-width:100%;max-height:100%;" alt="' + 'WIRED image of the day">';

      //console.log(items[i]['media:thumbnail']['@attributes']['url']);
    }
  }

  $("#RSSContent").html(htmlStr);
}

// Changes XML to JSON
function xmlToJson(xml) {

	// Create the return object
	var obj = {};

	if (xml.nodeType == 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};


function requestWIREDRss() {
  $.ajax({
    dataType: "xml",
    url: "https://cors-anywhere.herokuapp.com/https://www.wired.com/feed/category/photo/latest/rss",
    success: loadWIREDRss
  });
}

function requestRSSFeeds() {
  requestWIREDRss();
  //add other rss requests here
}

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
$("#WIREDButton").click(requestRSSFeeds);
