const express = require('express')
const app = express()
const route = require('./route/route')
const Port = 3001

const bodyParser = require('body-parser');//middleware to parse incoming request bodies
// parse application/json requests with a size limit of 50mb
// app.use(bodyParser.json({ limit: "50mb" }));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route)

app.listen(Port, () => {
    console.log(`Express App Running on ${Port}`)
})

//auto-gpt
//open-ai playground
//jasper
//quillbot
