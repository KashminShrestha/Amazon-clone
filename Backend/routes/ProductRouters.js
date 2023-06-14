const express = require("express")
const upload = require('../fileUpload')
const { addProduct, getallproduct, updateproduct, deleteproduct, getproductdetail } = require("../controller/ProductController")
const router = express.Router()

router.post("/addproduct", upload.single('product_image'), addProduct)
router.get("/getproduct", getallproduct)
router.put("/updateproduct/:id", upload.single('product_image'), updateproduct)
router.delete("/deleteproduct/:id", deleteproduct)
router.get("/getproductdetail/:id", getproductdetail)


module.exports = router