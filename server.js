import express from 'express';
import bodyParser from "body-parser";
import http from 'http';
import cors from 'cors';

let data


const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3000
const CreateServer = http.createServer(app)

app.get('/',(req,res)=>{
    res.send({data})
})

app.post('/',(req,res)=>{
    data = req.body.data
    console.log(data)
    res.send(data)
})

CreateServer.listen(port,()=>{
    console.log(`Le server est actif sur le port ${port} , http://localhost:3000`)
})