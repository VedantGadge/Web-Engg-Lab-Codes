import http from 'http';
import hello from './Hello.js';

const server = http.createServer((req,res)=>{
    res.write("Hello World " + hello.helloall());
    console.log(hello);
    res.end();
});
server.listen(3000);