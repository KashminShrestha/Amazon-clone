const express = require("express")
const { register, verifyuser, resendverification, getuserdetail, forgetPassword, resetPassword, singleuserdetail, updateuser, deleteuser, signIn, signout } = require("../controller/UserController")
const router = express.Router()

router.post('/register', register)
router.get('/verification/:id', verifyuser)
router.post('/resendverification', resendverification)
router.get('/getuser', getuserdetail)
router.post('/forgetpassword', forgetPassword)
router.post('/resetpassword/:id', resetPassword)
router.get('/singleuserdetail/:id', singleuserdetail)
router.put('/updateuser/:id', updateuser)
router.delete('/deleteuser/:id', deleteuser)
router.post('/signin', signIn)
router.get('/signout', signout)

module.exports = router