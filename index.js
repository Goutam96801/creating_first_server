const http = require('http');

const port = 8081; //Local port number

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<h1>Hello, Welcome to my server</h1>');
    response.end();

})
.listen(port, () => { //callback function
    console.log(`Nodejs server started on port ${port}`);
 }); 

 // http://localhost:8081