import api from '../lib/axios'

export default {
    applyVacancy(id, data){
        return api.post(`/candidate/${id}/apply`, data)
    },
    downloadPDF(id){
        return api.get(`/candidate/download/${id}`,  { responseType: 'blob' })
    }
}