const http = require("http");
const fs = require("fs");
const url = require("url");
const { Console } = require("console");



//creates a server object
const myServer = http.createServer((req, res) => {
    if(req.url ==='/favicon.ico'){
        res.end();
        return;
    }

    const log = `${Date.now()} : ${req.url} New Req Recieved\n`;
    const myUrl = url.parse(req.url, true);

    console.log(myUrl);

    fs.appendFile('log.txt', log, (err, data) => {
        switch (myUrl.pathname) {
            case '/':
                res.end('Welcome to the Home Page');
                break;
            case '/about':
                res.end('Welcome to the About Page');
                break;
            case '/contact':
                res.end('Welcome to the Contact Page');
                break;
            default:
                res.end('404 Page Not Found');
                break;
        }
    });
    });

myServer.listen(3000, () => console.log('server is listening on port 3000...'));