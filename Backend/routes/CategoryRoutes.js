const express = require("express")
const { addtocategory, getalldetails, updatecategory, deletecategory, getcategorydetail } = require("../controller/CategoryController")
const { authorize } = require("../controller/UserController")
const router = express.Router()

router.post('/addcategory', addtocategory)
router.get('/getcategory', getalldetails)
router.put('/updatecategory/:id', updatecategory)
router.delete('/deletecategory/:id', deletecategory)
router.get('/getcategorydetail/:id', getcategorydetail)


module.exports = router