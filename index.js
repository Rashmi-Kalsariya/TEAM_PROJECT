const express = require('express')


const app = express()


app.get("/", (req, res) => {
    res.send("Welcome to the Page")
})


app.listen(8090, () => {
    console.log("Server Running On port 8090...");

})