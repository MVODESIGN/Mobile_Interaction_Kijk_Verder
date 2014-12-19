var maxSlides = 17;
var count = 1;

function loadScript() {
// Wait for device to be ready loading everything
	document.addEventListener('deviceready', onDeviceReady, false);
	onDeviceReady();
};

// When device is ready
function onDeviceReady() {

	//DESKTOP
	document.getElementById('arrowImgRight').addEventListener('mouseup',  showNextQuestion, false);
	document.getElementById('start').addEventListener('mouseup',  onStartEnd, false);

	//PAGE 3
	document.getElementById('answerGeld').addEventListener('mousedown', onNavDown, false);
	document.getElementById('answerGeld').addEventListener('mouseup',  showNextQuestion, false);
	document.getElementById('answerGezondheid').addEventListener('mousedown', onNavDown, false);
	document.getElementById('answerGezondheid').addEventListener('mouseup',  showNextQuestion, false);
	document.getElementById('answerFamilie').addEventListener('mousedown', onNavDown, false);
	document.getElementById('answerFamilie').addEventListener('mouseup',  showNextQuestion, false);

	//PAGE 4
	document.getElementById('page4no').addEventListener('mousedown', onNavDown, false);
	document.getElementById('page4no').addEventListener('mouseup',  showNextQuestion, false);
	document.getElementById('page4yes').addEventListener('mousedown', onNavDown, false);
	document.getElementById('page4yes').addEventListener('mouseup',  showNextQuestion, false);

	//PAGE 5
	document.getElementById('answerOnvoldoende').addEventListener('mousedown', onNavDown, false);
	document.getElementById('answerOnvoldoende').addEventListener('mouseup',  showNextQuestion, false);
	document.getElementById('answerVoldoende').addEventListener('mousedown', onNavDown, false);
	document.getElementById('answerVoldoende').addEventListener('mouseup',  showNextQuestion, false);
	document.getElementById('answerGoed').addEventListener('mousedown', onNavDown, false);
	document.getElementById('answerGoed').addEventListener('mouseup',  showNextQuestion, false);

	//PAGE 9
	document.getElementById('page9no').addEventListener('mousedown', onNavDown, false);
	document.getElementById('page9no').addEventListener('mouseup',  showNextQuestion, false);
	document.getElementById('page9yes').addEventListener('mousedown', onNavDown, false);
	document.getElementById('page9yes').addEventListener('mouseup',  showNextQuestion, false);

	//PAGE 10
	document.getElementById('answerVerdienste').addEventListener('mousedown', onNavDown, false);
	document.getElementById('answerVerdienste').addEventListener('mouseup',  showNextQuestion, false);
	document.getElementById('answerGelukkig').addEventListener('mousedown', onNavDown, false);
	document.getElementById('answerGelukkig').addEventListener('mouseup',  showNextQuestion, false);

	//PAGE 14
	document.getElementById('page14no').addEventListener('mousedown', onNavDown, false);
	document.getElementById('page14no').addEventListener('mouseup',  showNextQuestion, false);
	document.getElementById('page14yes').addEventListener('mousedown', onNavDown, false);
	document.getElementById('page14yes').addEventListener('mouseup',  showNextQuestion, false);	

	//PAGE 15
	document.getElementById('page15no').addEventListener('mousedown', onNavDown, false);
	document.getElementById('page15no').addEventListener('mouseup',  showNextQuestion, false);
	document.getElementById('page15yes').addEventListener('mousedown', onNavDown, false);
	document.getElementById('page15yes').addEventListener('mouseup',  showNextQuestion, false);	

};

//Show Next Question on click
function showNextQuestion(event){
	if(count == maxSlides) {
		isOnEnd();//If im on the end of the Quiz
		return;//hier stop ik en doe ik niks meer
	}
	var oldSection = document.getElementById('page'+count);//old question

	count++;//Count increase every click
	var newSection = document.getElementById('page'+count);//new question

	//add css classes
	if(oldSection != null)
		oldSection.className = 'hide';
		newSection.className = 'show';
}

function onStartDown(){
	var el =event.target;
	el.className ='down';
}

function onStartEnd(){
	showNextQuestion();
}

function onNavDown(event){
	console.log(event.target)
	var el = event.target;
	el.className = 'down';
}

function isOnEnd(){
	console.log('ik ben op het einde beland')
}
