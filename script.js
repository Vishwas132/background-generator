var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColor(argument) {
	let hexCode = "#";
  	while( hexCode.length < 7 ){
    	hexCode += (Math.round(Math.random() * 15)).toString(16);
  	}
  	return hexCode;
}

function generateRandomColors() {
	 color1.value = randomColor();
	 color2.value = randomColor();
	 setGradient();
}

color1.value = "#ff0000";
color2.value = "#ffff00";
setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", generateRandomColors);