const mongoose = require('mongoose');

const subsectionschema = new mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    timeDuration:{
        type:Number,
    },
    videoUrl:{
        type:String,

    }
});

module.exports = mongoose.model("SubSection", subsectionschema);