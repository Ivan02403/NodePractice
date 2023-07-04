const {readFileSync , writeFileSync} = require('fs');
// const fs = require('fs');
const first = readFileSync('./first.txt', 'utf8');

const second = readFileSync('./second.txt', 'utf8');

// console.log(first);
// console.log(second);

writeFileSync('./result.txt', `this is result txt:  ${first} and ${second}`, {flag: 'a'});

//This a SYNCHRONUS FS