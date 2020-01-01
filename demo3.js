const _ = require('lodash');    // Now you can use any module/function in the lodash package.

let example = _.fill([1, 2, 3, 4, 5], "banana", 1, 4);
console.log(example);