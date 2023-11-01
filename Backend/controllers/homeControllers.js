import Vacancy from '../models/Vacancy.js'

const showJobs = async(req, res) => {

    const showVacancy = await Vacancy.find()

    return res.status(200).json(showVacancy)

}

export {
    showJobs
}