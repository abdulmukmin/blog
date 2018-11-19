const   mongoose = require('mongoose'),
        crypto = require('crypto'),
        HashToken = require('../helpers/HashToken.js');
        
const   userSchema = new mongoose.Schema({
    username : {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    salt: {type: String},
})

userSchema.pre('save', function(next){
    let salt = crypto.randomBytes(100).toString(),
        hash = HashToken.encryp(this.password, salt);
    
    this.password = hash
    this.salt = salt
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User