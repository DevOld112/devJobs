<script setup>
import { useRoute } from 'vue-router';
import { useVacancyStore } from '../../stores/useVacancyStore';
import CandidatePanel from '../../components/CandidatePanel.vue'
import { onMounted } from 'vue';

const route = useRoute()
const store = useVacancyStore()



onMounted(() => {
    store.loadVacancyData()
})

const { id } = route.params

console.log(store.candidates.length)

</script>

<template>
    

    <h1 class="text-gray-200 text-4xl mb-10">Lista de Candidatos</h1>

    <h3 class="text-gray-200 text-2xl mb-10">Gestiona y visualiza a tus Candidatos</h3>

    <hr>
    <div
   
    class="grid grid-cols-1">

        <CandidatePanel
        v-for="candidate in store.candidates"
        :key="candidate._id"
        :candidate="candidate"
        />


    </div>
        

    
</template>