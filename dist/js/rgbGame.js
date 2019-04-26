var numSquares=6;
var colorArray=[];
var pickedColor;
var squareList=document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var resetButton=document.querySelector("#reset");
var h1=document.querySelector("h1");
var mode=document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

resetButton.addEventListener("click", function(){
	reset();
});

function setUpModeButtons(){
	for(var i=0;i<mode.length;i++){
		mode[i].addEventListener("click", function(){
			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setUpSquares(){
	for(var i=0;i<squareList.length;i++){
		squareList[i].addEventListener("click",function(){
 			var clickedColor=this.style.backgroundColor;
 			if(clickedColor===pickedColor){
 				changeColors();
 				messageDisplay.textContent="Correct!";
 				resetButton.textContent="Play Again?";
 			} 
 			else{
 					this.style.backgroundColor= "#232323";
 					messageDisplay.textContent="Wrong!";
 				}
 		});
	}
}

function reset(){
	messageDisplay.textContent="";
	resetButton.textContent="New Colors";
	colorArray=generateColors(numSquares);
	pickedColor=pickColor();
	h1.style.backgroundColor = "steelblue";
	generateSquares();
}

function generateSquares(){
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squareList.length;i++){
 		// add initial colors to squares
 			if(colorArray[i]){
 				squareList[i].style.display="block";
 				squareList[i].style.backgroundColor=colorArray[i];
 			}
 			else{
 				squareList[i].style.display="none";
 			}
	}
}

function generateColors(num){
	colorArray=[];
	for(var i=0;i<num;i++){
		var red=Math.floor(Math.random()*256);
		var green=Math.floor(Math.random()*256);
		var blue=Math.floor(Math.random()*256);
		var RGB="rgb(" + red +", " + green + ", " + blue + ")";
		colorArray.push(RGB);
	}
	return colorArray;
}

function pickColor(){
	var pickedIndex=colorArray.length*Math.random()
	pickedIndex=Math.floor(pickedIndex);
	return colorArray[pickedIndex];
}

function changeColors(){
	for(var i=0;i<squareList.length;i++){
 		squareList[i].style.backgroundColor = pickedColor;
 		h1.style.backgroundColor=pickedColor;
 	}
}




	