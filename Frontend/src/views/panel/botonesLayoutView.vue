<script setup>
import { RouterLink, useRouter } from 'vue-router';
import PanelVacancy from '../../components/PanelVacancy.vue'
import { userVacancyStore } from '../../stores/userVacancyStore';
import { useVacancyStore } from '../../stores/useVacancyStore';


const store = userVacancyStore()
console.log(store.userVacancy)


</script>

<template>
    <h3 class="text-4xl text-gray-200 mb-10">Navegacion</h3>

    <div class="space-y-10">
            
        <div class="flex gap-10">
            <RouterLink
            class="font-bold text-gray-200 bg-blue-500 rounded-lg py-2 px-2 hover:bg-blue-600 hover:text-gray-300 w-96 text-center"
            :to="{name: 'newVacancy'}"
            >
            Agregar Nueva Vacante
            </RouterLink>

            <RouterLink
            class="font-bold text-gray-200 bg-yellow-500 rounded-lg py-2 px-2 hover:bg-yellow-600 hover:text-gray-300 w-96 text-center"
            :to="{name: 'newVacancy'}"
            >
            Mis Postulaciones
            </RouterLink>

            <RouterLink
            class="font-bold text-gray-200 bg-teal-500 rounded-lg py-2 px-2 hover:bg-teal-600 hover:text-gray-300 w-96 text-center"
            :to="{name:'principal'}"
            >
            Editar Perfil
            </RouterLink>
        </div>
        <hr>
        <div>
            <h1 class="text-4xl font-bold text-gray-200">Tus Vacantes</h1>

            <PanelVacancy
            v-for="job in store.userVacancy"
            :job="job"
            :key="job._id"
            />
        </div>

    </div>
    
</template>