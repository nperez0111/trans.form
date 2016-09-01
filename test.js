import test from 'ava';
const transform = require( './' );

test( 'transform function', t => {
    let x = {
        a: 2
    }
    t.deepEqual( x[ transform ]( {
        a: 'b'
    } ), {
        b: 2
    } );
} );

test( 'transform.save function', t => {
    let y = {
        a: 2
    }
    t.deepEqual( y[ transform.save ]( {
        a: 'b'
    } ), {
        b: 2
    } )
    t.deepEqual( y, {
        b: 2
    } )
} )
