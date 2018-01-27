# requireasarray

require directory and sub directories and return all of them as array

## Usage

so simple, look at the example

```javascript
//src/routers/index.js

module.exports = require('requireasarray')();

```

nothing left.

Also, it accepts an extra argument that describe which directory you wish to require them as array. example:

```javascript
//src/index.js

const routers = require('requireasarray')('./routers/');

```
