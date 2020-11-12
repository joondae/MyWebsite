//function syntax: function functionName () {}
function changeSomeHtml() {
  //very common for all websites
  document.getElementById("p1").innerHTML = "THIS IS THE NEW CONTENT";
};

//Events
//$(idName) has same functionality as .getElementById but has more features
$("p1").click(changeSomeHtml);
