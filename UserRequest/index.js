const fs = require("fs");
const express = require("express");
var app = express();

const data = JSON.parse(fs.readFileSync("./data.json"))

app.get('/users/', (req, res)=> {
    res.json(data.users);
})

app.get('/users/:id', (req, res) => {
    res.json(data.users[req.params.id])
    res.json(req);
})

app.listen(3000, ()=> {
    console.log("rodando");
})