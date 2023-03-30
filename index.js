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
                let newToDo = toDoList;
                newToDo.push(body.item);
                console.log(newToDo);
                response.writeHead(201);
            });
        }
        else if (method === "DELETE") {
            let body = "";
            request.on('error', (err) => {
                console.error(err)
            })
                .on('data', (chunk) => {
                    body += chunk;
                })
                .on('end', () => {
                    body = JSON.parse(body)
                    let deleteThis = body.item;
                    // for (let i = 0; i < toDoList.length; i++) {
                    //     if (toDoList[i] === deleteThis) {
                    //         toDoList.splice(i, 1);
                    //         break;
                    //     }
                    // }
                    toDoList.find((element, index) => {
                        if (element === deleteThis) {
                            toDoList.splice(index, 1);
                        }
                    })
                    response.writeHead(204);
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