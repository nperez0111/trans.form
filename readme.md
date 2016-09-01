# trans-form [![Build Status](https://travis-ci.org/nperez0111/trans.form.svg?branch=master)](https://travis-ci.org/nperez0111/trans.form)

> A Wrapper around object-manip to be used on any object to allow transformations.


## Install

```
$ npm install --save trans-form
```


## Usage

```js
const transform = require('trans-form');
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

### transForm(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## License

MIT © [Nick The Sick](http://nickthesick.com)
