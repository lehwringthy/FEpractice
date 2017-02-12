function geData() {
	// collect the numbers displayed in the red blocks
	for (var i = 0; i < list.length; i++) {
		data.push(list[i].firstChild.nodeValue);
	}
}

function renderList() {
	// render the updated number list
	for (var i = 0; i < data.length; i++) {
		document.getElementById(i+1).firstChild.nodeValue = data[i];
	}
}

function checkValid() {
	// body...
	var input = document.querySelector("input").value;
	if (Number(input)==NaN) {
		alert("please enter a number.");
	}
}
function leftIn() {
	// insert the input number to the left side of the number list
	var input = document.querySelector("input").value;
	checkValid();
	data.pop();
	data.unshift(input);
	renderList();
}

function rightIn() {
	// insert the input number to the right side of the number list
	var input = document.querySelector("input").value;
	checkValid();
	data.shift();
	data.push(input);
	renderList();
}

function leftOut() {
	//
	var alertmsg = data.shift();
	data.push(" ");
	alert(alertmsg);
	renderList();

}

function rightOut() {
	// body...
	var alertmsg = data.pop();
	data.unshift(" ");
	alert(alertmsg);
	renderList();	
}

function rmEle(event) {
	// body...
	alertmsg = event.target.firstChild.nodeValue;
	alert(alertmsg);
	event.target.firstChild.nodeValue = " ";

}

var list = document.querySelector('.queue').children;
var data = new Array();
geData();
var LI = document.getElementById("leftIn");
var LO = document.getElementById("leftOut");
var RI = document.getElementById("rightIn");
var RO = document.getElementById("rightOut");
var q = document.getElementsByClassName("queue");
LI.addEventListener("click", function() {leftIn();});
LO.addEventListener("click", function() {leftOut()});
RI.addEventListener("click", function() {rightIn()});
RO.addEventListener("click", function() {rightOut()});
for (var i = list.length - 1; i >= 0; i--) {
	list[i].addEventListener("click", function() {rmEle(event)});
}