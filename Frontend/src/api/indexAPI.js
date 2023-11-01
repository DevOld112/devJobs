import api from '../lib/axios'

export default {
    allVacancy() {
        return api.get('/index')
    }
}