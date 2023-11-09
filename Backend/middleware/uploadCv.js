import multer from "multer";
import path from 'path';
import { uniqueId } from '../helpers/index.js'


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/uploads/cv')
    },
    filename: function(req, file, cb){
        cb(null, uniqueId() + path.extname(file.originalname) )
    },
    
})

const upload = multer({ storage })

export default upload;