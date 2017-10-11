var http = require('http');
var fs =require ('fs')



http.createServer(function (req, res) {
	console.log('recibi un request' + req.url)

	switch (req.url){
		case'/index.html':
	
	fs.readFile('./public/index.html', function (err,data) {
		if (err) { 
			return console.log('No se pudo abrir el archivo:'+ err.message);
		}
		res.end(data.toString());
	})
	break
}

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');


}).listen(8080);