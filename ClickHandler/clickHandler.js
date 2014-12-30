
var count=0;

if (confirm("Welcome! Would you like to proceed with this?", "")) {
	alert("OK, that's Great");	
}


else {
	alert("Goodbye");
}

function clickhandler() {
	count++;
	alert("it works!! " + count);
	
	if (count > 1) {
		var b = document.getElementById("button");
		b.disabled = true;
	}
		
}


window.onload = writeMessage;
function writeMessage() {
	document.getElementById("clickingMessage").innerHTML = "nice clicking";
}