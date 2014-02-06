// this wrapper ensures script integrity
(function (window, document, undefined) {
	// safely override by changing properties of window object
	window.UNIQIT_GEN = function (prefix) {
		prefix = String(prefix);
		return function (nameStrings) {
			var result = '';
			for (var i = 0, n = arguments.length; i < n; ++i) {
				if (result !== '') result += ' ';
				result += prefix + String(arguments[i]);
			}
			return result;
		};
	};
})(window, document);