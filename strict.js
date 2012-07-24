define(['./object', './string', './date', './array', './function', './json', './xhr'], function (object, string, date) {

	var failTestRx;

	failTestRx = /^define|^prevent|descriptor$/i;

	function regexpShouldThrow (feature) {
		return failTestRx.test(feature);
	}

	// set unshimmable Object methods to be somewhat strict:
	object.failIfShimmed(regexpShouldThrow);
	// set strict whitespace
	string.setWhitespaceChars('\\s');

	return {
		failIfShimmed: object.failIfShimmed,
		setWhitespaceChars: string.setWhitespaceChars,
		setIsoCompatTest: date.setIsoCompatTest
	};

});
