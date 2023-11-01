import api from "../lib/axios";

export default {
    createVacancy(data){
        return api.post('/employ/vacancy', data)
    },
    showVacancy(id){
        return api.get(`/employ/vacancy/${id}`)
    }
}