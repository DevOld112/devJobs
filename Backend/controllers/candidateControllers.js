import { isValidObjectId } from "mongoose"
import Vacancy from "../models/Vacancy.js"
import fs from 'fs'
import path from "path"




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




export {
    applyVacancy
}