import express from 'express'
const server = express();
server.use(express.static('demo'));
server.use('/js' , express.static('dist'));
server.listen(8080);