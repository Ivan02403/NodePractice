const {readFile, writeFile} = require('fs');

readFile('./first.txt', 'utf-8', (err, data) => {
	if (err) {
		console.log(err);
		return;
	}
	const pers = data;
	
	readFile('./second.txt', 'utf8', (err, data) =>{
		if(err){
			console.log(err);
			return;
		}
		const sekond = data;
		writeFile('result2.txt',`this is ${pers}  and  ${sekond}`, (err, data) => {
			if(err){
				console.log(err)
				return;
			}
			console.log(data);
		});
	});
});

//this si ASYNCHRONUS FS .|...

// const sekond = readFile('./second.txt', 'utf8', (err, data) => {
// 	if(err) throw err;
// 	console.log(data);
// })

// writeFile('./third.txt', `this is ${pers}  and  ${sekond}`, (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// }	)