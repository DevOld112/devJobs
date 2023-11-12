import { defineStore } from 'pinia'
import { ref, onMounted, computed, inject } from 'vue';
import authApi from '../api/authApi';
import vacancyAPI from '../api/vacancyAPI';

export const userVacancyStore = defineStore('userVacancy', () =>{

    const user = ref({})
    const userVacancy = ref([])

    onMounted(async() => {
        try {
            const { data } = await authApi.auth()
            user.value = data
            
            const { data: dataVacancy } = await vacancyAPI.getUserVacancy(user.value._id)  

            userVacancy.value = dataVacancy
        } catch (error) {
            console.log(error)
        }
    })




    return{
        user,
        userVacancy
    }

})