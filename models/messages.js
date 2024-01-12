const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
    'name' : {
        type : String,
        required: true,
    },
    'email' : {
        type : String,
        required: true,
        unique: true,
    },
    'subject' : {
        type : String,
        required: true,
    },
    'message' : {
        type : String,
        required: true,
    },
},
{timestamps:true}
);

const Message = mongoose.model("message", messageSchema, 'messages');

module.exports = Message;