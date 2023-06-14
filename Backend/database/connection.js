const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE)
    .then(() => {
        console.log("Database Connected")
    })
    .catch((err) => {
        console.log(err)
    })
