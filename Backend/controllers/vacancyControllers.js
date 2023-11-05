import { isValidObjectId } from 'mongoose'
import Vacancy from '../models/Vacancy.js'

const addVacancy = async(req, res) => {

    // Validar que no exista un campo Vacio

    if(Object.values(req.body).includes('')){
        return res.status(400).json({
            msg: 'Existe un Campo vacio, por favor vuelve a intentarlo'
        })
    }
    
    const vacancyForm = req.body
    
    vacancyForm.user = req.user._id.toString()
    console.log(vacancyForm)

    try {
        const vacancy = new Vacancy(vacancyForm)
        const result = await vacancy.save()

        return res.status(200).json({
            msg: 'Vacante Publicada Exitosamente'
        })
    } catch (error) {
        console.log(error)
    }
}

const showVacancy = async(req, res) => {
    const { id } = req.params


    //Validar por ObjectId

    if(!isValidObjectId(id, res)){
        return res.status(404).json({
            msg: 'Enlace no valido'
        })
    }

    //Validar que exista en la base de datos

    const vacancy = await Vacancy.findById(id)

    if(!vacancy){
        return res.status(404).json({
            msg: 'Vacante no existe'
        })
    }

    //Mostrar finalmente la vacante

    res.status(200).json(vacancy)


}

const updateVacancy = async(req, res) => {

    const { id } = req.params
    //Validar por ObjectId

    if(!isValidObjectId(id, res)){
        return res.status(404).json({
            msg: 'Enlace no valido'
        })
    }

    //Validar que exista en la base de datos

    const vacancy = await Vacancy.findById(id)

    if(!vacancy){
        return res.status(404).json({
            msg: 'Vacante no existe'
        })
    }

    const { tittle, company, location, salary, contract, description, skills } = req.body

    vacancy.tittle = tittle
    vacancy.company = company
    vacancy.location = location
    vacancy.salary = salary
    vacancy.contract = contract
    vacancy.description = description
    vacancy.skills = skills

    try {
        const update = await vacancy.save();
        return res.status(200).json({
            msg: 'La cita se actualizacion correctamente'
        })
    } catch (error) {
        res.status(404).json({
            msg: 'No se pudo realizar la actualizacion correctamente, por favor volver a intentarlo'
        })
    }
}

const deleteVacancy = async(req, res) =>{ 

    const { id } = req.params
    
    //Validar que el id sea valido

    if(!isValidObjectId(id, res)){
        return res.status(404).json({
            msg: 'Peticion Invalida'
        })
    }

    //Validamos que el id exista en la base de datos

    const vacancy = await Vacancy.findById(id)
    if(!vacancy){
        return res.status(401).json({
            msg: 'Vacante de trabajo NO existe'
        })
    }

    //Validar que sea el mismo usuario que creo la vacante pueda eliminarla

    console.log(vacancy.user)
    console.log(req.user._id)

    if(vacancy.user.toString() !== req.user._id.toString()){
        return res.status(403).json({
            msg:'No tienes los permisos para realizar esa accion'
        })
    }

    try {
        const result = await vacancy.deleteOne()

        return res.status(200).json({
            msg: 'Cita eliminada Correctamente'
        })
    } catch (error) {
        console.log(error)
    }



}

export {
    addVacancy,
    showVacancy,
    updateVacancy,
    deleteVacancy
}