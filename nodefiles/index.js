console.log('Wellcome The Server is Runing!!');



const http = require("http");

const fs = require("fs");  // file sysem inside node.js
const data = require('./data'); // files you crea

http.createServer((req,res) => {

    var path = req.url.toLowerCase();
    const parse = require("querystring").parse
    let url = req.url.split("?");  // separate route from query string
    let query = parse(url[1]); // convert query string to a JS object
     console.log(query)

    switch(url[0]) {

        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            
            res.end(JSON.stringify(data.getAll()));
            break;
        case '/detail':

            res.writeHead(200, {'Content-Type': 'text/html'});
            
            res.end(JSON.stringify(data.getItem(7676)));
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.send(JSON.stringify());
            
        
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found');
            break;
        }
    }).listen(process.env.PORT || 3000);
    
