<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { useVacancyStore } from '../stores/useVacancyStore'


const vacancy = useVacancyStore()


defineProps({
    job: {
        type: Object
    }
})

</script>

<template>
    <div class="text-white font-bold flex flex-wrap justify-between items-center">
        <div class="flex justify-between items-center ">
            <div class="flex flex-col w-1/4 my-10">
            <h2>{{ job.company }}</h2>
            <h3 class="text-gray-500">{{ job.tittle }}</h3>
            <div class="flex gap-1">
                <p class="text-center text-xs font-bold text-yellow-200">{{ job.candidates.length }}</p>
                <span class="text-center text-xs font-extrabold text-yellow-200"> Candidatos</span>
            </div>
            
            </div>
        </div>

        <div class="flex gap-5 h-16 items-center ">
            <RouterLink
            class="font-bold text-gray-200 bg-yellow-500 rounded-lg py-2 px-2 hover:bg-yellow-600 hover:text-gray-300  text-center"
            :to="{
                name:'candidates',
                params: {id: job._id }   
            }"

            >
                Candidatos
            </RouterLink>

            <RouterLink
            class="font-bold text-gray-200 bg-teal-500 rounded-lg py-2 px-2 hover:bg-teal-600 hover:text-gray-300  text-center"
            :to="{
                name:'editVacancy',
                params: {id: job._id }   
            }"

            >
                Editar Vacante
            </RouterLink>

            <button
            class="font-bold text-gray-200 bg-red-500 rounded-lg py-2 px-2 hover:bg-red-600 hover:text-gray-300 text-center"
            type="submit"
            @click="vacancy.deleteVacancy(job._id)"
            >
                Eliminar Vacante
        </button>
        </div>


    </div>
    <hr>
</template>