const http = require('http');
const fs = require('fs')
var path = require('path');

const hostname = '127.0.0.1';
const port = 5000;

//172.31.0.26

const server = http.createServer(function (request, response) {
    console.log('request', request.url);

    var filePath = '.' + request.url;
    if (filePath == './') {
        filePath = './index.html';
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
    };

    var contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT') {
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(404, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
                });function serve(pathToFile) {
                    fs.readFile(pathToFile, (err, data) => {
                        if (err) {
                            console.log(err);
                        } else {
                            res.end(data);
                        }//else
                    }); //readFile
                }//serve
                
                switch (req.url) {
                    case '/': {function serve(pathToFile) {
                        fs.readFile(pathToFile, (err, data) => {
                            if (err) {
                                console.log(err);
                            } else {
                                res.end(data);
                            }//else
                        }); //readFile
                    }//serve
                    
                    switch (req.url) {
                        case '/': {
                            serve('index.html');
                            break;
                        }
                        
                        case '/getRoot.html':{
                            serve('getRoot.html');
                            break;
                        }   
                        case '/books.html':{
                            serve('books.html');
                            break;
                        }
                        default:
                            serve('index.html');
                        }//switch
                    });//createServer
                
                        serve('index.html');
                        break;
                    }
                    
                    case '/getRoot.html':{
                        serve('getRoot.html');
                        break;
                    }   
                    case '/books.html':{
                        serve('books.html');
                        break;
                    }
                    default:
                        serve('index.html');
                    }//switch
                });//createServer
            
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

});

server.listen(port)