/**
 * UNIQIT_GEN is a factory that returns a dedicated function
 * to create unique name strings with the prefix you specified.
 *
 * For example:
 * var _u = UNIQIT_GEN( 'foo_' ); // returns the prefixing function
 * console.log( _u( 'bar' ) ); // will get 'foo_bar'
 * Now you don't have to type the same prefix over and over again.
 *
 * Example of passing multiple arguments:
 * // this is especially useful when you are prefixing style class names
 * var _u = UNIQIT_GEN( 'foo_' ); // returns the prefixing function
 * console.log( _u( 'a', 'b', 'c' ) ); // will get 'foo_a foo_b foo_c'
 * 
 * Hope you enjoy it!
 */

// objects with the same name will be overrided, use with caution
window.UNIQIT_GEN = function ( prefix ) {
	// make sure prefix is a string
	prefix = String( prefix );
	// return the result function
	return function ( nameStrings ) {
		var result = '';
		// if there is multiple arguments, each one will be prefixed and joined with a space
		for ( var i = 0, n = arguments.length; i < n; ++i ) {
			if ( result !== '' ) result += ' ';
			result += prefix + String( arguments[i] );
		}
		return result;
	};
};