const express = require("express")
const { paymentprocess } = require("../controller/PaymentController")
const router = express.Router()

router.post("/paymentprocess", paymentprocess)
module.exports = router