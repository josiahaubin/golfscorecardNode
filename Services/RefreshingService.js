const mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let _schema = new Schema({

})

class RefreshingService {
    get repository() {
        return mongoose.model('Refresh', _schema)
    }
}

module.exports = new RefreshingService()