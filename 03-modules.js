const names = require('./04-names');
const sayHi = require('./05-utils');
const newImport = require('./06-alternative way');
require('./07-mind-grenade');
console.log(newImport);
console.log(sayHi);
sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);
