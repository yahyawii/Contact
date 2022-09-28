const mongoose = require('mongoose')

const ConnectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('DB is Connected')
    } catch (error) {
        console.log(error)
    }
}

module.exports = ConnectDB