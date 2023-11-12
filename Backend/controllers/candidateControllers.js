import { isValidObjectId } from "mongoose"
import Vacancy from "../models/Vacancy.js"
import { fileURLToPath } from 'url';
import path from "path";
import fs from 'fs'
import { dirname } from 'path';
import { error } from "console";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);




const applyVacancy = async(req, res, next) => {
    const { id } = req.params

   // Validar que sea un ID valido

    if(!isValidObjectId(id, res)){
        return res.status(400).json({
            msg: 'Vacante No valida'
        })
    }

    // Validar que la vacante exista

    const validVacancy = await Vacancy.findById(id)

    if(!validVacancy){
        return res.status(400).json({
            msg: 'Vacante No existe'
        })
    }





    // Actualizar la vacante

    const newCandidate = {
        name: req.body.name,
        email: req.body.email,
        cv: req.file.filename
    }


    console.log(newCandidate)

    validVacancy.candidates.push(newCandidate)
    await validVacancy.save()

    return res.status(200).json({
        msg: 'Postulacion Exitosa'
    })

}


const downloadCV = (req, res) => {
    const { id } = req.params

    const fileName = id;
    const filePath = path.join(process.cwd(), '/public/uploads/cv', fileName)

    console.log(filePath)

    try {
        if (fs.existsSync(filePath)) {
            res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
            res.setHeader('Content-Type', 'application/pdf');

            const fileStream = fs.createReadStream(filePath);
            fileStream.pipe(res)
    } else{
        res.status(404).json({
            error: 'Archivo No encontrado'
        })
    }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: 'Error del servidor'
        })
    }
}

export {
    applyVacancy,
    downloadCV
}