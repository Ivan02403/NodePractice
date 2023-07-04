const http = require('http');

const http = require('http');
const server = http.createServer((req, res)=>{
	console.log("request event");
	res.end("Hello world")
})

server.listen(5000, ()=>{
	console.log("the server is running is port 5000");
})






// const server = http.createServer((req, res) =>{
// 	if(req.url === '/home'){
// 		res.end("Home Page");
// 	}

// 	if(req.url === '/about'){
// 		res.end("About Page");
// 	}

// 	if(req.url === '/contact'){
// 		res.end("Contact Page");
// 	}

// 	res.end('error page');
	
	
// });

// server.listen(3000, () =>{
// 	console.log("The server is running")
// })