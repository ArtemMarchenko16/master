// Modules
// const {myMessage} = require("./helper");
//
// myMessage();
//
// const readLine = require('node:readline');
//
// const foo = async () => {
//     const readInstance = readLine.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//     readInstance.question("What`s your name? ", (name) => {
//         console.log(`My name is: ${name}`);
//         readInstance.close()
//     })
// }
//
// void foo()

const liveServer = async () => {
    const http = require('node:http');

    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            data: 'Hello World!',
        }));
    });

    server.listen(8000);
}

liveServer()
