define([], function() {
	function Helpers() {
		
	};

	Helpers.htmlSpecialChars = function(text) {
		return text
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;");
	};

	return Helpers;
});