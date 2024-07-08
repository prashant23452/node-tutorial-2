const {Console} = require('console');
const http = require('http');
const fs= require('fs');

const port = process.env.PORT || 3000;

const server =http.createServer((req,res) =>{
    //res.statusCode= 200;
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url);
    if(req.url=='/'){
        res.statusCode= 200;
        const data=fs.readFileSync('index.html')
        res.end(data.toString());
    }
    else if(req.url =='/about'){
        res.statusCode= 200;
        res.end('<h1> About code with harry <h1> <p> Hey this is About code with harry </p>');
    }
    else if(req.url =='/cwh'){
        res.statusCode= 200;
        res.end('<h1> TThis is code with harry <h1> <p> Hey this is the way to rock the world </p>');
    }
    else{
        //res.harry()
        res.statusCode=404
        res.end('<h1> Page not found <h1> <p> Hey this page not found on this server </p>');
    }
})
    
server.listen(port,()=>{
      console.log(`Server is listening on port ${port}`);
});