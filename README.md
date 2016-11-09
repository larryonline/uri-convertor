[![npm version](https://badge.fury.io/js/uri-convertor.png)](https://badge.fury.io/js/uri-convertor)

# URI-Convertor

URI convertor between `regular uri` / `thunder uri` / `qqdl uri` / `flashget uri` and more...

## Installation

* npm

```
npm install --save uri-convertor
```

* github

```
https://github.com/larryonline/url-convertor.git
```


## How to use it.

* Command line

```
./bin/uric --help
```

* require('uri-convertor')

```
const URIC = require('uri-convertor');
var uric = URIC();


uric.styles(); // ['list output styles']


var uris = ['regular uri', 'thunder uri', 'flashget uri', 'qqdl uri', 'etc....'];
uric.convert(uris, {
	styles: [
	  'regular uri <as default>', 
	  'thunder', 
	  'flashget', 
	  'qqdl', 
	  'etc....'
	] // if styles point to null / undefined, 
	  // all style will have chance to be convert.
});
```

## Issues
Any problems? please post issues [here](https://github.com/larryonline/uri-convertor/issues)
