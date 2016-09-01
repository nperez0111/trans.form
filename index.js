'use strict';

const trans = require( "objextender" )( {
    form: function ( getCurrentObject, transformerObject ) {
        return require( 'object-manip' )( transformerObject, getCurrentObject() )
    }
} )

module.exports = trans.form;
