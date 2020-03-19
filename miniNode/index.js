const express = require('express');
const fs = require('fs');

const https = require('https');
const http = require('http');

const app = express();

app.get('/', (req, res) => {
   res.send('Hello World!');
});

const httpServer = http.createServer(app);
const httpsServer = https.createServer({
   key: fs.readFileSync('./key.pem'),
   cert: fs.readFileSync('./cert.pem'),
}, app);

httpServer.listen(80, () => {
   console.log('HTTP Server running on port 80');
});
httpsServer.listen(443, () => {
   console.log('HTTPS Server running on post 443');
});