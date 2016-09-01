'use strict';

const trans = require( "objextender" )( {
    form: function ( getCurrentObject, transformerObject ) {

        return require( 'object-manip' )( transformerObject, getCurrentObject() )

    },
    save: function ( getCurrentObject, transformerObject ) {

        let addDiff = function ( that, obj ) {

            Object.keys( obj ).forEach( function ( cur ) {

                if ( ( obj[ cur ] ) === Object( obj[ cur ] ) ) {

                    if ( !that.hasOwnProperty( cur ) || !isObj( that[ cur ] ) ) {

                        that[ cur ] = {};
                    }

                    addDiff( that[ cur ], obj[ cur ] )

                } else {

                    that[ cur ] = obj[ cur ];

                }

            } )

        }

        addDiff.call( this, this, require( 'object-manip' )( transformerObject, getCurrentObject() ) )

        return this
    }
} )

module.exports = {
    toString: () => trans.form,
    save: trans.save
}
