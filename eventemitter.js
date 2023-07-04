const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('respond', (name, id)=>{/*name of event  'response' */
	console.log(`data receved ${name}, ${id}`);
});

customEmitter.on('respond', ()=>{
	console.log(`some logic here`);
});

customEmitter.emit('respond', 'john', 24);


// const http = require('http');
// const server = http.createServer();

// server.on('request', (req, res)=>{
// 	console.log('testing');
// 	res.end('Server 3000');
// });

// // server.emit('response');

// server.listen(3000,()=>{
// 	console.log('Server is running at port 3000');
// });



 /* on- listen for an event, emit- emit an event*/
/* Always listen for an event before emit*/


// const http = require('http');

// const server = http.createServer();

// server.on('request', (req, res)=>{
// 	res.end('Welcome');
// })

// server.listen(4000, ()=>{
// 	console.log('server is running');
// });