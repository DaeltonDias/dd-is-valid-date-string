# dd-is-valid-date-string
Know if the date string is valid

### Installation
```shell
$ npm install dd-is-valid-date-string
```

### Use
```javascript
// CommonJS
const isValidDate = require('dd-is-valid-date-string');

// ES6
import isValidDate from 'dd-is-valid-date-string';
```

```javascript

// Valid formats
isValidDate('06.03.1997'); // returns true
isValidDate('06-03-1997'); // returns true
isValidDate('06/03/1997'); // returns true
isValidDate('1997.03.06'); // returns true
isValidDate('1997-03-06'); // returns true
isValidDate('1997/03/06'); // returns true

// Invalid dates and formats or whatever
isValidDate('32-03-1997'); // returns false
isValidDate('1997-03-32'); // returns false
isValidDate(19970306); // returns false
isValidDate('abc'); // returns false
isValidDate([]); // returns false
isValidDate({}); // returns false
isValidDate('<Anything else>') // returns false

```