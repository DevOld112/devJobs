import { defineStore } from 'pinia'
import { ref, onMounted, computed, inject } from 'vue';
import authApi from '../api/authApi';
import { useRouter } from 'vue-router'
import router from '../router';


export const useUserStore = defineStore('user', () => {

    const user = ref({})
    const toast = inject('toast')

    onMounted( async() => {
        try {
            const { data } = await authApi.auth()
            user.value = data
        } catch (error) {
            console.log(error)
            next()
            
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
        getUserLogin,
        logout
    }



})