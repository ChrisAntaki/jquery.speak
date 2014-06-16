;(function($) {

	var talkative = ("SpeechSynthesisUtterance" in window);

	function speak() {
		if (!talkative) {
			return;
		}

		var message = $(this).text();
		var utterance = new SpeechSynthesisUtterance(message);
		speechSynthesis.speak(utterance);
	}

	$.fn.speak = speak;

})(jQuery);