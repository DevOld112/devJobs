<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useVacancyStore } from '../stores/useVacancyStore'
import candidateApi from '../api/candidateApi';

const vacancy = useVacancyStore()


onBeforeUnmount(() => {
    vacancy.clearCandidates();
})



defineProps({
    candidate: {
        type:Object

    }
})  


const handleSubmit = async(id) => {
    
    try {
        
        const response = await candidateApi.downloadPDF(id)

        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob)

        const link = document.createElement('a');
        link.href = url;
        link.download = `cv-${id}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.log(error)
    }
}

</script>
<template>
    <div class="flex justify-between gap-10 items-center mb-4" v-for="candidate in candidate.candidates" :key="candidate._id">
        <div class="grid">
            <h2 class="text-gray-200">Nombre</h2>
            <h3 class="text-gray-200">{{ candidate.name }}</h3>
        </div>
    
        <div class="grid px-2">
            <h2 class="text-gray-200">Email</h2>
            <h3 class="text-gray-200">{{ candidate.email }}</h3>
        </div>
    

        <div class="grid">
            <button
            @click="handleSubmit(candidate.cv)"
            class="font-extrabold bg-teal-500 p-2 rounded-lg text-gray-200 my-10"
            >
            Descargar CV
        </button>

        </div>

    </div>

</template>

