const http = require('http');

const app = require('./app');

app.set('port', process.env.PORT || 3000);

const server = http.createServer(app);

server.listen(process.env.PORT || 3000);

//For Android 
// server.listen(3000, '192.168.1.54')
// For Apple
// server.listen(3000, '192.168.1.53')