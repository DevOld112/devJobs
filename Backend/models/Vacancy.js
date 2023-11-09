import mongoose from "mongoose";
import shortid from "shortid";
import slug from "slug";

const vacancySchema = mongoose.Schema({
    tittle: {
        type: String,
        require: true,
        trim: true
    },
    company: {
        type: String,
        require: true,
        trim: true
    },
    location:{
        type: String,
        trim: true,
        require: true
    },
    salary: {
        type: String,
        default: 0
    },
    contract: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    url: {
        type:String
    },
    skills: [String],
    candidates: [{
        name: String,
        email: String,
        cv: String
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        require: true
    }
})

const vacancy = mongoose.model('Vacancy', vacancySchema)

export default vacancy;
