# trans.form [![Build Status](https://travis-ci.org/nperez0111/trans.form.svg?branch=master)](https://travis-ci.org/nperez0111/trans.form)

> A Wrapper around [object-manip](https://github.com/nperez0111/object-manip) to be used on any object to allow transformations.

To see why this is _safe or not safe_ refer to [my library](https://github.com/nperez0111/objExtender#is-this-safe)


## Install

```
$ npm install --save trans.form
```


## Usage

```js
const transform = require('trans.form');
let x = {
	a: 2
}
x[ transform ]( {
	a: function(x){
    	return x + 2;
    }
} )
//=> { a: 4 }
```


## API

### transForm

Returns the key to be able to manipulate the object.

#### Methods available to all `Object`s

### transform( transformerObject )

#### input
Type: `Object`
Must conform to the formatting specified by [object-manip](https://github.com/nperez0111/object-manip#usage)

Returns a new object after all the values of the current object have been transformed.

### transform.save( transformerObject )

#### This is a mutable method!
This if the exact same as above but saves all changes into the object. 

## License

MIT © [Nick The Sick](http://nickthesick.com)
