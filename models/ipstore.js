const mongoose = require("mongoose");

const ipSchema = new mongoose.Schema({
    'url': {
        type: String,
        required: true,
    },
}, { timestamps: true });

const IpStore = mongoose.model("IpStore", ipSchema);

module.exports = IpStore;
