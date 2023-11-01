import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import indexAPI from '../api/indexAPI' 


export const useVacancyStore = defineStore('vacancies', () => {

    const jobs = ref([])

    onMounted( async() => {
        try {
            const { data } = await indexAPI.allVacancy()
            jobs.value = data
        } catch (error) {
            console.log(error)
        }
    })

    return {
        jobs
    }
})