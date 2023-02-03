const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser');

const app = express()


app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res)=>{
    res.send("exress is running properly")
})


app.post('/enroll', (req, res)=>{
    res.status(200).send(req.body);
    // res.status(401).send(req.body);
})


app.listen(3000, ()=>{
    console.log(`server is running on port 3000`);
})