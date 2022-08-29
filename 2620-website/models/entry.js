const mongoose = require("mongoose");
const entrySchema = new mongoose.Schema({
    entryID: {
        type: int,
        required: true,
    },
    entry1: {
        type: char,
        required: false
    },
    entry2: {
        type: char,
        required: false
    },
    entry3: {
        type: char,
        required: false
    },
    entry4: {
        type: char,
        required: false
    },
    entry5: {
        type: char,
        required: false
    },

});
const Entry = mongoose.model("entry", entrySchema);
module.exports = Entry;