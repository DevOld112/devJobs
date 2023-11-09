import { defineStore } from 'pinia'
import { ref, onMounted, computed, inject } from 'vue';
import authApi from '../api/authApi';
import vacancyAPI from '../api/vacancyAPI';
import { useRouter } from 'vue-router'



export const useUserStore = defineStore('user', () => {

    const user = ref({})
    const toast = inject('toast')
    const userVacancy = ref([])
    const router = useRouter()
    const identification = ref('')

    onMounted( async() => {
        try {
            const { data } = await authApi.auth()
            user.value = data
            identification.value = data._id
            console.log(identification.value)
        } catch (error) {
            console.log(error)

            
        }
    })


    const getUserLogin = computed(() => user.value?.name ? user.value?.name : '')



    function logout() {
        localStorage.removeItem('AUTH_TOKEN')
        user.value = {}

        toast.open({
            message: 'Sesion Finalizada Correctamente',
            type: 'success'
        })

        setTimeout(() => {
            router.push({name: 'login'})
        }, 2000)


    }

    return {
        user,
        identification,
        getUserLogin,
        logout
    }



})