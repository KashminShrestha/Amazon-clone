const express = require('express')
const { sample } = require('../controller/testfunction')
const router = express()

router.get("/hello", sample)


module.exports = router