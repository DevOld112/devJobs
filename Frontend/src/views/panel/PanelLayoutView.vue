<script setup>
import { RouterView, useRouter, useRoute } from 'vue-router';
import { useUserStore } from '../../stores/useUserStore';
import { onMounted } from 'vue';

const user = useUserStore()
const router = useRouter()
const route = useRoute()

onMounted(() =>{
    setTimeout(() => {
        router.push({name: 'panelNavegation'})
    }, 2000)
})

</script>

<template>
    <h1 class="text-4xl font-bold text-gray-200 ">Panel de Administracion</h1>
    <h3 class="text-2xl font-bold text-gray-200">{{ user.user.name }}, crea tus vacantes y administra tu perfil</h3>
    <hr>

    <main>
        <p 
        class="text-2xl font-bold text-gray-200 text-center"
        v-if="route.name === 'panel'"
        >
            Cargando...</p>
        <RouterView/>
    </main>
    
</template>