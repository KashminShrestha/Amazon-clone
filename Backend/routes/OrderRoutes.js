const express = require("express")
const { placeOrder, getAllDetails, getsingleorderdetail, getuserorders, updateorder, deleteorder } = require("../controller/OrderController")
const router = express.Router()

router.post("/placeorder", placeOrder)
router.get('/getallorders', getAllDetails)
router.get('/getsingleorder/:id', getsingleorderdetail)
router.get('/getuserorder/:id', getuserorders)
router.put('/updateorder/:id', updateorder)
router.delete('/deleteorder/:id', deleteorder)

module.exports = router