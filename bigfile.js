const {writeFileSync} = require('fs')

for (let i = 0; i <100; i++){
	writeFileSync('./filesystem/big.txt', `hello world ${i}\n`, {flag: 'a'})
}