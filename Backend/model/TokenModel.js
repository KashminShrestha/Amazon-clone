const mongoose = require('mongoose')

const { ObjectID } = mongoose.Schema
const tokenSchema = ({
    token: {
        type: String,
        required: true
    },
    user: {
        type: String,
        ref: "User"
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 86400
    }
})

module.exports = mongoose.model("Token", tokenSchema)