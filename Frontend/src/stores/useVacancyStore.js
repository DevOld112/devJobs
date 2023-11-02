import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import indexAPI from '../api/indexAPI' 
import vacancyAPI from '../api/vacancyAPI';


export const useVacancyStore = defineStore('vacancies', () => {

    const jobs = ref([])
    const vacancy = ref({})

    onMounted( async() => {
        try {
            const { data } = await indexAPI.allVacancy()
            jobs.value = data
        } catch (error) {
            console.log(error)
        }

    })

    function setSelectedVacancy(vacante){
        return vacancy.value = vacante
    }

    

    return {
        jobs,
        vacancy,
        setSelectedVacancy
    }
})