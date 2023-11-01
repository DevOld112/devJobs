<script setup>

defineProps({
    job: {
        type: Object
    }
})


</script>

<template>
    <div class="text-white font-bold">
        <div class="flex justify-between items-center">

            <div class="flex flex-col my-10">
            <h2>{{ job.company }}</h2>
            <h3 class="text-gray-500">{{ job.tittle }}</h3>
            </div>

            <div class="flex flex-col my-10">
                <h2>Ubicacion</h2>
                <h3 class="text-gray-500">{{ job.location }}</h3>
            </div>

            <div class="flex flex-col my-10">
                <h2>Contrato</h2>
                <h3 class="text-gray-500">{{ job.contract }}</h3>
            </div>

            <div class="text-white inline-block w-64 h-10 text-center font-bold my-5 bg-teal-500 p-2 rounded-lg">
                Mas Info
            </div>



        </div>

        <hr>

    </div>
    
</template>