const http = require('http');

const server = http.createServer((req, res) => {
if (req.url === '/'){
	res.end('Welcome Home >.<');
}
else if (req.url ==='/about'){
	res.end('Welcome to about <3');
}else{
	res.end(`<h1>Helloooo</h1> <p>Baliw namali ka</p> <a href='/'>Back</a>`);
}


});

server.listen(4000, () =>{
	console.log("The server is started to run");
});