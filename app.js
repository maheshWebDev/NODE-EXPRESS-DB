const http = require('http');

const fs = require('fs')

const server = http.createServer((req,res)=>{
    let url = req.url;
    if(url == '/'){
        res.writeHead(200,{'content-type' : 'text/html'})
       return res.end(`<form action="/data" method="POST">
       <label for="fname">First name:</label><br>
       <input type="text" id="fname" name="fname" value="John"><br>
       <input type="submit" value="Submit">
     </form>`);
    }
    
//  parsing incoming data and storing it in a file

    if(url == '/data'){
        let body = [];
        req.on('data',(chunks)=>{
           body.push(chunks)
        });
        req.on('end',()=>{
          const stringdata = Buffer.concat(body).toString();
          const userName = stringdata.split('=')[1]
          fs.writeFileSync('userdata.txt',userName);
        })
       
        res.writeHead(200,{'content-type' : 'text/html'})
 return res.end('<h1>data recived</h1>');
    }
    if(url=='/node'){
        res.writeHead(200,{'content-type' : 'text/html'})
        return res.end('<h1>node</h1>');
    }else{
        res.writeHead(404,{'content-type' : 'text/html'})
        return res.end('<h1>not fount</h1>');
    }
   
})

server.listen(3000,()=>{
    console.log("server is running...")
})



