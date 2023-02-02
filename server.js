import express from 'express';
import bodyParser from "body-parser";
import http from 'http';
import cors from 'cors';

const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3000
const CreateServer = http.createServer(app)

app.get('/',(req,res)=>{
    res.json({data:''})
})

app.post('/',(req,res)=>{
    const data = req.body.data
    console.log(data)
    res.send({data})

})

CreateServer.listen(port,()=>{
    console.log(`Le server est actif sur le port ${port} , http://localhost:3000`)
})