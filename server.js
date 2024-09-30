const fs = require('fs')
const express = require("express")
const port = 3000

const app = express()

app.get("/", (req,res) => {
    res.status(200).json({
        "status" : "Succes",
        "message" : "application is running good . . . ."
    })
})


app.get('/jet', (req, res) => {
    res.status(200).json({
        "message" : "Ping Succesfully"
    })
});

// middleware / handler untuk url yang tidak dapat diakses karena memang tidak ada di aplikasi
// membuat middleware = our own middleware (.get .use)
app.use((req, res, next) => {
    // status code : 404 = untk not found (pengecekan data/url yang tidak ada)
    res.status(404).json({
        "status": "Failed",
        "massage": "API not exist !!!"
    })
})

app.listen("3000", () => {
    console.log("start apk dengan port 3000")
})