const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        num: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },

    },
    { timestamps: true }
)
module.exports = mongoose.model('Contact', ContactSchema)