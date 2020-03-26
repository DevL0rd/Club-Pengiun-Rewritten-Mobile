
//document.domain = "play.cprewritten.net";
var iframe = document.getElementById("game");
iframe.onload = function () { alert('myframe is loaded'); }; // before setting 'src'
iframe.src = "https://play.cprewritten.net/#/login";
$("#game").contents().find("#header").remove();
