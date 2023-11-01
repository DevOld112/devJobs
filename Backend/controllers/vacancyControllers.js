import Vacancy from '../models/Vacancy.js'

const addVacancy = async(req, res) => {

    // Validar que no exista un campo Vacio

    if(Object.values(req.body).includes('')){
        return res.status(400).json({
            msg: 'Existe un Campo vacio, por favor vuelve a intentarlo'
        })
    }
    

    try {
        const vacancy = new Vacancy(req.body)
        const result = await vacancy.save()

        return res.status(200).json({
            msg: 'Vacante Publicada Exitosamente'
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    addVacancy
}