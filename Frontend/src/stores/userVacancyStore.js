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
            console.log(user.value._id)

            const { data: dataVacancy } = await vacancyAPI.getUserVacancy(user.value._id)
            console.log(dataVacancy)
            

            userVacancy.value = dataVacancy
            console.log(userVacancy.value)
        } catch (error) {
            console.log(error)
        }
    })




    return{
        user,
        userVacancy
    }

})