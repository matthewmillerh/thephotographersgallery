function selected(s) {
	/*for (var i = 1; i < 8; i++) {
		document.getElementById("selected" + i).style.paddingTop = "10px";
		document.getElementById("selected" + i).style.color = "#b3b3b3";
		document.getElementById("selected" + i).style.textShadow = "";
	}*/
	var i = 1;
		while (document.getElementById('selected' + i) != null) {
			document.getElementById('selected' + i).style.paddingTop = "10px";
			document.getElementById('selected' + i).style.color = "#b3b3b3";
			document.getElementById('selected' + i).style.textShadow = "";
			i++;
		}
		
	document.getElementById("selected" + s).style.paddingTop = "15px";
	document.getElementById("selected" + s).style.color = "#f5f5f5";
	document.getElementById("selected" + s).style.textShadow = "0px 0px 20px white";	
}

function loadHome() {
	if (window.location.href === "http://localhost/Photographer/index.html?id=photo") {		
		read('photographers');
		selected('2');
	} else {
		read('home');
		selected('1');
	}
}

var id = 0;
//plain read for mainDiv
function read(s, f){
	id = f;
	//define content and get section Id
	content = document.getElementById('mainDiv');
	//define url variable
	var url = "./content/" + s + ".html";
	//create a new XMLHttpRequest object
	var request = new XMLHttpRequest();
	//use your listener to load content from file
	request.addEventListener('load', showContent, false);
	//open your request
	request.open("GET", url, true);
	//start you request
	request.send();
}
//adds the content to div
function showContent(e){
	document.getElementById('body').scrollTop = 0;
	content.innerHTML = e.target.responseText;
	history.pushState(123, "PAGE", "http://localhost/Photographer/");
	
	//indentation for photographers
	if (document.getElementById(id) != null) {
		//indent selected
		document.getElementById(id).style.paddingLeft = "10px";
		document.getElementById(id).style.color = "white";
		document.getElementById(id).style.textShadow = "0px 0px 20px white";
	}
}
window.addEventListener("popstate", function(e) {
	// URL location
	window.location = "http://localhost/Photographer/";
	
});

//gallery calls read3 for side content
function read2(s, f, b){
	id2 = f;
	style2 = b;
	//define content and get section Id
	content = document.getElementById('otherSide');
	//define url variable
	if (b != null) {
		var url = "./gallery/" + s + ".html";
	} else {
		var url = "../gallery/" + s + ".html";
	}
	//create a new XMLHttpRequest object
	var request = new XMLHttpRequest();
	//use your listener to load content from file
	request.addEventListener('load', showContent2, false);
	//open your request
	request.open("GET", url, true);
	//start you request
	request.send();
}

function showContent2(e){
	document.getElementById('body').scrollTop = 0;
	content.innerHTML = e.target.responseText;
	
	//indentation for albums
	if (document.getElementById(id2) != null) {
		if (style2 != null) {
			//clear selected
			var i = 1;
			while (document.getElementById(i) != null) {
				document.getElementById(i).style.color = "#b3b3b3";
				document.getElementById(i).style.textShadow = "";
				document.getElementById(i).style.backgroundColor = "";
				document.getElementById(i).style.webkitBoxShadow = "";
				document.getElementById(i).style.mozBoxShadow = "";
				document.getElementById(i).style.boxShadow = "";
				i++;
			}
			
			document.getElementById(id2).style.backgroundColor = "#4d4d4d";
			document.getElementById(id2).style.webkitBoxShadow = "0px 0px 5px 2px rgba(77,77,77,1)";
			document.getElementById(id2).style.mozBoxShadow = "0px 0px 5px 2px rgba(77,77,77,1)";
			document.getElementById(id2).style.boxShadow = "0px 0px 5px 2px rgba(77,77,77,1)";
			document.getElementById(id2).style.color = "white";
			document.getElementById(id2).style.textShadow = "0px 0px 20px white";
		} else {
			//clear indents
			var i = 1;
			while (document.getElementById(i) != null) {
				document.getElementById(i).style.paddingLeft = "0px";
				document.getElementById(i).style.color = "#b3b3b3";
				document.getElementById(i).style.textShadow = "";
				i++;
			}
			
			//indent selected
			document.getElementById(id2).style.paddingLeft = "10px";
			document.getElementById(id2).style.color = "white";
			document.getElementById(id2).style.textShadow = "0px 0px 20px white";
		}
	}
}

//loads exhibition images
function read3(){
	//display text
	document.getElementById('dreamText').style.display = "block";
	hideText();
	//define content and get section Id
	content = document.getElementById('exhibit');
	//define url variable
	var url = "./content/exhibitions_image.html";
	//create a new XMLHttpRequest object
	var request = new XMLHttpRequest();
	//use your listener to load content from file
	request.addEventListener('load', showContent3, false);
	//open your request
	request.open("GET", url, true);
	//start you request
	request.send();
}
//adds the content to div
function showContent3(e){
	var millisecondsToWait = 1000;
	setTimeout(function() {
		//code
		document.getElementById('dreamText').innerHTML = "to Reality";
		content.innerHTML = e.target.responseText;
	}, millisecondsToWait);
}

//loads exhibition images
function read4(){
	//display text
	//document.getElementById('dreamText2').style.display = "block";
	hideText();
	//define content and get section Id
	content = document.getElementById('exhibit2');
	//define url variable
	var url = "./content/exhibitions_image2.html";
	//create a new XMLHttpRequest object
	var request = new XMLHttpRequest();
	//use your listener to load content from file
	request.addEventListener('load', showContent4, false);
	//open your request
	request.open("GET", url, true);
	//start you request
	request.send();
}
//adds the content to div
function showContent4(e){
	var millisecondsToWait = 1000;
	setTimeout(function() {
		//code
		//document.getElementById('dreamText2').innerHTML = "to Reality";
		content.innerHTML = e.target.responseText;
	}, millisecondsToWait);
}

//loads exhibition images
function read5(){
	//display text
	//document.getElementById('dreamText2').style.display = "block";
	hideText();
	//define content and get section Id
	content = document.getElementById('exhibit3');
	//define url variable
	var url = "./content/exhibitions_image3.html";
	//create a new XMLHttpRequest object
	var request = new XMLHttpRequest();
	//use your listener to load content from file
	request.addEventListener('load', showContent5, false);
	//open your request
	request.open("GET", url, true);
	//start you request
	request.send();
}
//adds the content to div
function showContent5(e){
	var millisecondsToWait = 1000;
	setTimeout(function() {
		//code
		//document.getElementById('dreamText2').innerHTML = "to Reality";
		content.innerHTML = e.target.responseText;
	}, millisecondsToWait);
}

//hides the text
function hideText() {
	setTimeout(function() {
		document.getElementById('dreamText').style.display = "none";
	}, 2000);
}

var x = 1;
var timeID;
function startTimer(path) {
	if (document.getElementById('imgToLoad') != null) {
		var s = path;
		clearInterval(timeID);
		document.getElementById("imgToLoad").src = "../images/" + path + "5.jpg";
		timeID = setInterval(function() {loadNextImage(s)}, 1000);
	}
}

function stop() {
	clearInterval(timeID);
}

function loadNextImage(path) {
	if (document.getElementById('imgToLoad') != null) {
		if (x == 4) {
			document.getElementById("imgToLoad").src = "../images/" + path + x + ".jpg";	
			x = 1;
		} else {
			document.getElementById("imgToLoad").src = "../images/" + path + x + ".jpg";
			x++;
		}
	} else {
		clearInterval(timeID);
	}
}

//fix elements for mobile display
function check() {
	if (detectmob() == true) {
		document.getElementById('wrapper').style.position = "relative";
		document.getElementById('mainDiv').style.top = "0px";
	}
}

//checks the user agent
function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}
