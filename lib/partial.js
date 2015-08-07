'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( sigma )
*	Partially applies scale parameter `sigma` and returns a function for evaluating the moment-generating function (MGF) for a Rayleigh distribution.
*
* @param {Number} sigma - scale parameter
* @returns {Function} MGF
*/
function partial( sigma ) {

	/**
	* FUNCTION: mgf( t )
	*	Evaluates the moment-generating function (MGF) for a Rayleigh distribution.
	*
	* @private
	* @param {Number} t - input value
	* @returns {Number} evaluated MGF
	*/
	return function mgf( t ) {

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
