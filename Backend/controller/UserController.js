const User = require('../model/UserModel')
const Token = require('../model/TokenModel')
const sendEmail = require('../sendEmail')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const expressjwt = require('express-jwt')


exports.register = async (req, res) => {
    //destructuring
    const { username, email, password } = req.body

    const user = await User.findOne({ email: email })
    if (user) {
        return res.status(400).json({ error: "User already exist" })

    }
    let register = new User({
        username: username,
        email: email,
        password: password,
    })
    register = await register.save()
    if (!register) {
        return res.status(400).json({ error: "Something went wrong" })
    }
    let token = await Token({
        token: crypto.randomBytes(16).toString('hex'),
        user: register._id
    })
    token = await token.save()
    if (!token) {
        return res.status(400).json({ error: "Something went wrong" })
    }
    const url = `http://localhost:3000/user/verification/${token.token}`
    sendEmail({
        from: "noreply@gmail.com",
        to: email,
        subject: "Verification Mail",
        text: "Click the following link " + url,
        html: `<a href=${url}><button>Click This Link</button></a>`
    })


    res.send(register)
}

exports.verifyuser = async (req, res) => {
    let token = await Token.findOne({ token: req.params.id })
    if (!token) {
        return res.status(400).json({ error: "Invalid Token or Token had expired" })

    }
    let verify = await User.findById(token.user)
    if (!verify) {
        return res.status(400).json({ err: "User associated with token not found" })
    }
    // Check if the user is verified or  not
    if (verify.isVerified) {
        return res.status(400).json({ err: "User had already been verified" })
    }
    verify.isVerified = true
    verify = await verify.save()
    if (!verify) {
        return res.status(400).json({ err: "Something went wrong" })
    }
    res.send({ message: "User verified Succesfully" })

}

exports.resendverification = async (req, res) => {
    const { email } = req.body
    let user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res.status(400).json({ err: "User not found" })
    }
    if (user.isVerified) {
        return res.status(400).json({ err: "User had been already verified" })
    }
    let token = new Token({
        token: crypto.randomBytes(16).toString('hex'),
        user: user._id
    })
    token = await token.save()
    if (!token) {
        return res.status(400).json({ error: "Something went wrong" })
    }
    const url = `http://localhost:3000/user/verification/${token.token}`
    sendEmail({
        from: "noreply@gmail.com",
        to: email,
        subject: "Verification Mail",
        text: "Click the following link " + url,
        html: `<a href=${url}><button>Click This Link</button></a>`
    })
    res.json({ msg: "message sent" })

}
exports.getuserdetail = async (req, res) => {
    let user = await User.find()
    if (!user) {
        return res.status(400).json({ err: "something is wrong" })

    }
    return res.send(user)
}
exports.forgetPassword = async (req, res) => {
    let user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res.status(400).json({ err: "Email not Found" })
    }
    let token = new Token({
        token: crypto.randomBytes(16).toString('hex'),
        user: user._id
    })
    token = await token.save()
    if (!token) {
        return res.status(400).json({ err: "Something went wrong" })
    }
    const url = `http://localhost:3000/user/resetpassword/${token.token}`
    sendEmail({
        from: "noreply@gmail.com",
        to: user.email,
        subject: "Reset Password link Mail",
        text: "Click the following link " + url,
        html: `<a href=${url}><button>Click This Link</button></a>`
    })
    res.json({ msg: "Password Reset Link send" })
}

exports.resetPassword = async (req, res) => {
    let token = await Token.findOne({ token: req.params.id })
    if (!token) {
        return res.status(400).json({ err: "Token invalid or expired" })
    }
    let user = await User.findById(token.user)
    if (!user) {
        return res.status(400).json({ err: "User not found" })
    }
    user.password = req.body.password
    user = await user.save()
    if (!user) {
        return res.status(400).json({ err: "Something went wrong" })
    }
    res.send({ msg: "Password updated" })
}

exports.singleuserdetail = async (req, res) => {
    let user = await User.findById(req.params.id)
    if (!user) {
        return res.status(400).json({ err: "User not found" })
    }
    res.send(user)
}

exports.updateuser = async (req, res) => {
    let user = await User.findByIdAndUpdate(req.params.id, {
        email: req.body.email,
        username: req.body.username
    })
    if (!user) {
        return res.status(400).json({ err: "Something went wrong" })
    }
    user = await user.save()
    res.status(200).json({ mess: "User Update" })
}

exports.deleteuser = async (req, res) => {
    let deleteuser = await User.findByIdAndDelete(req.params.id)
    if (!deleteuser) {
        return res.status(400).json({ err: "Something went wrong" })
    }
    res.json({ mes: " User Deleted succesfully" })
}

exports.signIn = async (req, res) => {
    const { email, password } = req.body
    let user = await User.findOne({ email: email })
    if (!user) {
        return res.status(400).json({ err: "user not found" })
    }
    //check password
    if (!user.authenticate(password)) {
        return res.status(400).json({ err: "password not matched" })
    }
    if (!user.isVerified) {
        return res.status(400).json({ err: "User not verified please verify" })
    }
    //generate token
    let token = jwt.sign({ user: user._id, role: user.role }, process.env.JWT_SECRET)
    //store in cookie
    res.cookie('mycookie', token, { expire: Date.now() + 86400 })
    const { _id, username, role } = user
    res.send({
        token, user: {
            _id, username, email, role
        }
    })

}
exports.signout = async (req, res) => {
    res.clearCookie('myookie')
    res.send({ message: "Signed out Successfully" })
}
exports.authorize = expressjwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }) //instade of "" process.env.JWT_SECRET ""      use     """not123"""