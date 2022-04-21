const http = require('http');
const app = require('./app');
const connectToDB = require('./mongoDb');
const PORT = 9012;

http.createServer(app).listen(PORT, () => {
    new connectToDB();
    console.log(`Server is running on port number ${PORT}`);
})