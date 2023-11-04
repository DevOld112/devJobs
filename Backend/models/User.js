import mongoose from "mongoose";
import { uniqueId } from '../helpers/index.js'
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        trim: true,
        require: true,
    },
    token: {
        type: String,
        default: uniqueId()
    },
    verified: {
        type: Boolean,
        default: false
    },
    admin: {
        type: Boolean,
        default: false
    }
})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.checkPassword = async function(inputPassword){
    return await bcrypt.compare(inputPassword, this.password)
}

const users = mongoose.model('Users', userSchema)

export default users;