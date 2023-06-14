const express = require("express")
const cors = require('cors')

const app = express()
require('dotenv').config()

port = process.env.PORT || 3001
const testroute = require('./routes/testroute')
const categoryroute = require('./routes/CategoryRoutes')
const productroute = require('./routes/ProductRouters')
const userroute = require('./routes/UserRoutes')
const orderroute = require('./routes/OrderRoutes')

require('./database/connection')

app.listen(port, () => {
    console.log(`Server started at ${port}`)
})

app.use(cors())
app.use(express.json())
app.use(testroute)
app.use('/category', categoryroute)
app.use('/product', productroute)
app.use('/user', userroute)
app.use('/order', orderroute)
app.use('/public/uploads', express.static('public/uploads'))

console.log("Hello")
