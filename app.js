var path = require('path')

var express = require("express")
var app = express()
var PORT = 3000

app.use('/', express.static(path.resolve(__dirname, 'public')))

app.get("/hello-world", (req, res) => {
res.send("Hello,World!")
})
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
