'use strict';

// MODULES //

var erf = require( 'compute-erf' );


// FUNCTIONS //

var exp = Math.exp,
	square = function( x ) {
		return Math.pow( x, 2 );
	};


// CONSTANTS //

var SQRT_PI_OVER_TWO = Math.sqrt( Math.PI / 2 ),
	SQRT_TWO = Math.sqrt( 2 );


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
		var sigmat;
		sigmat = t * sigma;
		return 1 + sigmat * exp( square( sigmat ) / 2 ) * SQRT_PI_OVER_TWO *
			( erf( sigmat / SQRT_TWO ) + 1 );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
