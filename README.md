# URI-Convertor

URI convertor between regular uri / thunder / qqdl / flashget and more...


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