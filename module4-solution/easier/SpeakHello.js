(function(window){
	var helloSpeaker = {};
	var speakWord = "Hello ";
	helloSpeaker.name = "Yaakov ";	
	helloSpeaker.speak = function(){
		console.log(speakWord + helloSpeaker.name);
	}
	window.helloSpeaker = helloSpeaker;
})(window);

function speak(name) {
  console.log(speakWord + " " + name);
}

