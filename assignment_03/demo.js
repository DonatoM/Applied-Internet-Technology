var http = require('http');
var fs = require('fs');
http.createServer(handleRequest).listen(3000);
console.log('Started server on port 3000');

function serveStatic(res, path, contentType, resCode) {
  fs.readFile(path, function(err, data){
    if(err){
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 - Internal Error');
    }else{
      res.writeHead(resCode, { 'Content-Type': contentType });
      res.end(data);
    }
  });
};

function handleRequest(req, res){
  var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  var date = new Date();
  date = date.toString();
  switch(path){
    case '':
      serveStatic(res, './public/index.html', 'text/html', 200);
      console.log(date.toLocaleString()+" "+req.method+" "+req.url+" "+res.statusCode+" "+http.STATUS_CODES[res.statusCode]);
      break;
    case '/home':
      serveStatic(res, './public/index.html', 'text/html', 200);
      console.log(date.toLocaleString()+" "+req.method+" "+req.url+" "+res.statusCode+" "+http.STATUS_CODES[res.statusCode]);
      break;
    case '/about':
      serveStatic(res, './public/about.html', 'text/html', 200);
      console.log(date.toLocaleString()+" "+req.method+" "+req.url+" "+res.statusCode+" "+http.STATUS_CODES[res.statusCode]);
      break;
    case '/css/base.css':
      serveStatic(res, './public/css/base.css', 'text/css', 200);
      console.log(date.toLocaleString()+" "+req.method+" "+req.url+" "+res.statusCode+" "+http.STATUS_CODES[res.statusCode]);
      break;
    case '/img/image1.png':
      serveStatic(res, './public/img/efam.png', 'image/png', 200);
      console.log(date.toLocaleString()+" "+req.method+" "+req.url+" "+res.statusCode+" "+http.STATUS_CODES[res.statusCode]);
      break;
    case '/img/image2.png':
      serveStatic(res, './public/img/vegeta.png', 'image/png', 200);
      console.log(date.toLocaleString()+" "+req.method+" "+req.url+" "+res.statusCode+" "+http.STATUS_CODES[res.statusCode]);
      break;
    case '/me':
      serveStatic(res, './public/about.html', 'text/html', 200);
      console.log(date.toLocaleString()+" "+req.method+" "+req.url+" "+res.statusCode+" "+http.STATUS_CODES[res.statusCode]);
      break;
    default:
      serveStatic(res, './public/404.html', 'text/html', 404);
      console.log(date.toLocaleString()+" "+req.method+" "+req.url+" "+res.statusCode+" "+http.STATUS_CODES[res.statusCode]);
      break;
  }
};
