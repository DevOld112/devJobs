import { ref, onMounted, inject } from 'vue'
import { defineStore } from 'pinia'
import indexAPI from '../api/indexAPI' 
import vacancyAPI from '../api/vacancyAPI';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router'



export const useVacancyStore = defineStore('vacancies', () => {

    const jobs = ref([])
    const vacancy = ref({})
    const loading = ref(true)
    const toast = inject('toast')
    const router = useRouter()
    const candidates = ref([])
    const route = useRoute()

    async function loadVacancyData(){

        try {
            const { data } = await indexAPI.allVacancy()
            
            jobs.value = data

            jobs.value.forEach(vacante => {
                const idVacante = vacante._id

                if(idVacante === route.params.id){
                    candidates.value.push(vacante)
                }
            });

            console.log(candidates.value)

        } catch (error) {
            console.log(error)
        }finally {
            loading.value = false
        }
    }
        

    function setSelectedVacancy(vacante){
        return vacancy.value = vacante
    }

    async function deleteVacancy(id){

        try {
            if(confirm('¿Desea eliminar esta vacante?')){
                const { data } = await vacancyAPI.deleteVacancy(id)

                toast.open({
                message: data.msg,
                type: 'success'
            })

            router.push({name: 'panelNavegation'})
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function clearCandidates(){
        candidates.value = []
        console.log(candidates.value)
        return
    }

    return {
        jobs,
        vacancy,
        setSelectedVacancy,
        loading,
        deleteVacancy,
        candidates,
        clearCandidates,
        loadVacancyData
    }
})