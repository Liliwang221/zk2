const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    if(req.url==='/txt'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end('txt')
    }else if(req.url==='/json'){
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify({code:1,list:[1,2,3]}))
    }else if(req.url==='/jpg'){
        res.writeHead(200,{'Content-Type':'image/jpeg'})
        let imgBuf=fs.readFileSync('./1.jpg')
        res.end(imgBuf)
    }
})
server.listen(process.env.PORT||3000,()=>{
    console.log('服务启动成功')
})