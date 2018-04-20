fs = require('fs')

const express = require('express');
const app = express();

var employees = [{ id: 1, name: 'Manish' },
    { id: 2, name: 'Gupta' },
    { id: 3, name: 'Abhishek' },
    { id: 4, name: 'Somu' },
    { id: 5, name: 'Vishal' }];

  app.get('/', (req, res) => { 
    fs.readFile(__dirname + '/index.html',
    function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading index.html: ' + err);
      }
      res.writeHead(200);
      res.end(data);
    });
  });

  app.get('/stream', (req, res) => { 
    res.writeHead(200, {
      'Content-type': 'text/event-stream',
      'Cache-control': 'no-cache',
      'Connection': 'keep-alive'
    });
    setInterval(function() {
      res.write('data: Manish!\n\n');
    }, 10);
  });

  app.get('/streaming', (req, res) => { 
    res.writeHead(200, {
      'Content-type': 'text/event-stream',
      'Cache-control': 'no-cache',
      'Connection': 'keep-alive'
    });
    setInterval(function() {
      res.write('data: Manish!\n\n');
    }, 2000);
  });

  app.get('/updates', (req, res) => { 
    res.writeHead(200, {
      'Content-type': 'text/event-stream',
      'Cache-control': 'no-cache',
      'Connection': 'keep-alive'
    });
    setInterval(function() {
      res.write('data: Gupta!\n\n');
    }, 3000);
  });

  app.get('/updatetwoevent', (req, res) => { 
    res.writeHead(200, {
      'Content-type': 'text/event-stream',
      'Cache-control': 'no-cache',
      'Connection': 'keep-alive'
    });
    setInterval(function() {
      res.write('data: Manish Gupta!\n\n');
      // res.json(employees);
    }, 10);
  });

  app.get("/employees", function(req, res)  { 
    // console.log(employees);
    res.json(employees);

});

  app.listen(3000);
