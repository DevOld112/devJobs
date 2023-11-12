<script setup>
import { onMounted } from 'vue';
import VacancyEmploy from '../../components/VacancyEmploy.vue';
import { useVacancyStore } from '../../stores/useVacancyStore';
import { RouterLink } from 'vue-router'

    const store = useVacancyStore()

    onMounted(() =>{
        store.loadVacancyData()
        console.log(store.jobs)
    })

</script>

<template>

    <h1 class="text-white font-bold text-2xl">DevJobs</h1>
    <div>
        <p class="mt-10 text-white font-bold text-xl">Encuentra y Publica trabajos para Desarrolladores Web</p>

    <RouterLink 
        :to="{name:'newVacancy'}"
        class="text-white inline-block w-72 text-center font-bold my-5 bg-teal-500 p-2 rounded-lg" href="">Publicar nueva Vacante
    
    </RouterLink>
    </div>
    
    <div>

        <hr class="bg-gray-300">
        <h1 class="text-4xl text-white font-bold mt-5">Lista de Vacantes</h1>

        <VacancyEmploy
        v-for="job in store.jobs" 
        :job="job"
        :key="job._id"
        />

    </div>

    
    
</template>