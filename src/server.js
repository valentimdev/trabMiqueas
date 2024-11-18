const express = require('express')
const port = 3000;
const app = express()


app.get("/",(req, res)=>{
    res.sendFile(__dirname + "/public/index.html")

})


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})