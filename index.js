console.log('File Init');

/*****************************************************/
// write a file
const fs = require('fs');

try {
    fs.writeFileSync('example.txt', 'Hello, World!', { encoding: 'utf8' });
    console.log('File written successfully.');
} catch (err) {
    console.error('Error writing file:', err);
}


/*****************************************************/
// Http Server
const http = require("http");
const hostname = "localhost";
const port = 3000;

// Request Response 
const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plan");
  response.end('Hello world\n');
});

// Listen
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
