'use strict';

const isObj = function ( maybe ) {
        return maybe === Object( maybe )
    },
    rmDiff = function ( that, obj ) {

        Object.keys( that ).forEach( function ( cur ) {

            if ( !obj.hasOwnProperty( cur ) ) {

                delete that[ cur ]

            }

        } )

        return obj

    },
    addDiff = function ( that, obj ) {

        Object.keys( obj ).forEach( function ( cur ) {

            if ( isObj( obj[ cur ] ) ) {

                if ( !that.hasOwnProperty( cur ) || !isObj( that[ cur ] ) ) {

                    that[ cur ] = {};
                }

                addDiff( that[ cur ], obj[ cur ] )

            } else {

                that[ cur ] = obj[ cur ];

            }

        } )

    },
    manip = require( 'object-manip' ),
    trans = require( 'objextender' )( {
        form: function ( getCurrentObject, transformerObject ) {

            return manip( transformerObject, getCurrentObject() )

        },
        save: function ( getCurrentObject, transformerObject ) {

            addDiff( this, rmDiff( this, manip( transformerObject, getCurrentObject() ) ) )

            return this

        }
    } )

module.exports = {
    toString: () => trans.form,
    save: trans.save,
    now: trans.form
}
