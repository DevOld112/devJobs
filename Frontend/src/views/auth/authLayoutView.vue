<script setup>
import { RouterView, useRoute, useRouter } from 'vue-router';
import { onMounted } from 'vue';



const route = useRoute()
const router = useRouter()




const titles = [
    {name: 'register', titlesName: 'Comienza a publicar tus vacantes gratis, solo debes crear una cuenta'},
    {name: 'login', titlesName: 'Para publicar y administrar tus vacantes, debes iniciar Sesion'}
]


</script>

<template>
    <h1 class="text-4xl font-bold text-gray-200">Autenticancion de Usuarios</h1>
    <h3 
    v-for="title in titles"
    class="text-2xl font-bold text-gray-200"
    :class="{'hidden': route.name !== title.name}"
    >
    {{ title.titlesName }}
    </h3>

    <hr>
    <main>
        <RouterView/>
    </main>
</template>