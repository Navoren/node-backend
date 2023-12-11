const http = require("http"); //this module helps in creating a server
const fs = require("fs"); //this module helps in reading and writing files
const url = require("url"); //this module helps to parse the url
const { Console } = require("console");


//handler function
//creates a server object
const myServer = http.createServer((req, res) => { //it takes two parameters request and response 
    if(req.url ==='/favicon.ico'){ //this is to prevent the favicon request from being logged in the log file
        res.end();
        return;
    }

    const log = `${Date.now()} : ${req.url} New Req Recieved\n`;
    const myUrl = url.parse(req.url, true); //parse helps in parsing the url and true is to parse the query string

    console.log(myUrl);

    fs.appendFile('log.txt', log, (err, data) => {
        switch (myUrl.pathname) { //pathname is the path of the url //switch case helps in navigating the url and query parameters
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

myServer.listen(3000, () => console.log('server is listening on port 3000...')); //the server object listens on port 3000 this is a callback function

//if we create handler function on our own it creates a mess of the code, so we use express framework to create handler function