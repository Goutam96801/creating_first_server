const http = require('http');

const port = 8081; //Local port number

const toDoList = ["Complete Node Byte", "Play Cricket"];


http.createServer((request, response) => {
    // response.writeHead(200, { 'Content-Type': 'text/html' });
    // response.write('<h1>Hello, Welcome to my server</h1>');
    // response.end();
    const { method, url } = request;

    if (url === "/todos") {
        if (method === "GET") {
            response.writeHead(200,{ "Content-Type": "text/html" });
            response.write(toDoList.toString());
        } else if (method === "POST") {
            let body = "";
            request.on('error', (err) => {
                console.error(err)
            }).on('data', (chunk) => {
                body += chunk;
                console.log(chunk);
            }).on('end', () => {
                body = JSON.parse(body);
                console.log("data: ", body);
            })
        }
        else {
            response.writeHead(501);
        }
    }
    // console.log(method, url);
    response.end();


})
.listen(port, () => { //callback function
    console.log(`Nodejs server started on port ${port}`);
 }); 

 // http://localhost:8081