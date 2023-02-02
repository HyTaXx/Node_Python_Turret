import express from 'express';
import http from 'http';

const app = express()
const port = 3000
const CreateServer = http.createServer(app)


app.get('/',(req,res)=>{
    res.json({msg:'ok'})
})

app.post('/',(req,res)=>{
    res.json(req.body)
})

CreateServer.listen(port,()=>{
    console.log(`Le server est actif sur le port ${port} , http://localhost:3000`)
})