# dd-is-valid-date-string
Know if the date string is valid

### Installation
```shell
$ npm install dd-is-valid-date-string
```

### Valid formats
```shell
'DD.MM.YYYY', 'DD-MM-YYYY', 'DD/MM/YYYY'
'YYYY.MM.DD', 'YYYY-MM-DD', 'YYYY/MM/DD'
```

### Use
```javascript
// CommonJS
const isValidDate = require('dd-is-valid-date-string');

// ES6
import isValidDate from 'dd-is-valid-date-string';
```

```javascript

// Valid dates and formats
isValidDate('06.06.1997'); // returns true
isValidDate('06-06-1997'); // returns true
isValidDate('06/06/1997'); // returns true
isValidDate('1997.06.06'); // returns true
isValidDate('1997-06-06'); // returns true
isValidDate('1997/06/06'); // returns true

// Invalid dates and formats or whatever
isValidDate('32-06-1997'); // returns false
isValidDate('1997-06-32'); // returns false
isValidDate(19970606); // returns false
isValidDate(06061997); // returns false
isValidDate('abc'); // returns false
isValidDate([]); // returns false
isValidDate({}); // returns false
isValidDate('<Anything else>') // returns false

```