;(function($) {

	var talkative = ("SpeechSynthesisUtterance" in window);

	function speak(message) {
		if (!message || !talkative) {
			return;
		}

		var utterance = new SpeechSynthesisUtterance(message);
		speechSynthesis.speak(utterance);
	}

	$.speak = speak;

	$.speak.talkative = talkative;

	$.fn.speak = function() {
		var message = this.val() || this.text();

		speak(message);
	};

})(jQuery);