import mongoose from "mongoose";
import { uniqueId } from '../helpers/index.js'

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

const users = mongoose.model('Users', userSchema)

export default users;