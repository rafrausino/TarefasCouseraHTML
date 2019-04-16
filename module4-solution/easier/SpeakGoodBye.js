(function(window){
	var byeSpeaker = {};
	var speakWord = "Good Bye ";
	byeSpeaker.name = "John ";	
	byeSpeaker.speak = function(){
		console.log(speakWord + byeSpeaker.name);
	}
	window.byeSpeaker = byeSpeaker;
})(window);

function speak(name) {
  console.log(speakWord + " " + name);
}
