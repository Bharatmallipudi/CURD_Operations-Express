const mongoose = require('mongoose');
const data = mongoose.Schema({
    name :{
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    }
})
module.exports = mongoose.model('address',data)