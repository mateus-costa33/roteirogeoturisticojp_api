const express = require("express");

const api = express();


api.get("/", (req, res) => {
    res.send("Olá mundo!")
})

api.listen(8080)