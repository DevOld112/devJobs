import Vacancy from "../models/Vacancy.js"

const getUserVacancy = async(req, res) => {
    const { user } = req.params

    console.log(user)
    console.log(req.user._id.toString())

    if(req.user._id.toString() !== user){
        return res.status(400).json({
            msg: 'Acceso Denegado'
        })
    }

    try {
        const vacancy = await Vacancy.find({user})
        console.log(vacancy)
        res.json(vacancy)
    } catch (error) {
        console.log(error)
    }
}

export {
    getUserVacancy
}