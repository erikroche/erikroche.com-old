const http = require ('http');

http.createServer(function (req, res) {
res.write("<h1>Welcome to erikroche.com!</h1>");
res.end();
	
}
).listen(3000);

console.log("Server started on port 3000")
