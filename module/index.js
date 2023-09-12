const mongoose = require('mongoose')
// mongoose.set('strictQuery', true);
const DB_URL  = 'mongodb://127.0.0.1:27017/photo-booth-ai'
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 30000,
}).then(() => {
    console.log('connect')
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

const userModle = new mongoose.model('photobooth', userSchema)
module.exports = userModle