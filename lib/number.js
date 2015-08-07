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


// MGF //

/**
* FUNCTION: mgf( x, sigma )
*	Evaluates the moment-generating function (MGF) for a Rayleigh distribution with scale parameter `sigma` at a value `t`.
*
* @param {Number} t - input value
* @param {Number} sigma - scale parameter
* @returns {Number} evaluated MGF
*/
function mgf( t, sigma ) {
	var sigmat;
	sigmat = t * sigma;
	return 1 + sigmat * exp( square( sigmat ) / 2 ) * SQRT_PI_OVER_TWO *
		( erf( sigmat / SQRT_TWO ) + 1 );
} // end FUNCTION mgf()


// EXPORTS //

module.exports = mgf;
