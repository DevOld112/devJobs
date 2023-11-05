<script setup>
import { RouterView, RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
import { useUserStore } from '../stores/useUserStore';
import { computed } from 'vue';
import { onMounted } from 'vue';

const user = useUserStore()

const route = useRoute()

</script>

<template>
  <main class="container p-6 space-y-10">
    <div class="flex items-center justify-between gap-5">
      <RouterLink
      :to="{name: 'principal'}"
      class="text-6xl font-bold text-white">
      
        devJobs
      
      </RouterLink>

      <form v-if="route.path === '/layout'">
        <input class="bg-gray-600 text-white" type="text">
        <input class="p-2 text-white border border-gray-300 mx-3 rounded-md italic font-bold hover:bg-white hover:text-gray-900 hover:border-gray-900" type="submit" value="Buscar">
      </form>

      <nav
      v-if="user.getUserLogin"
      class="flex gap-5 items-center">

      <p class="text-gray-200 font-bold">
        ¡Bienvenido, <span class="font-extrabold italic"> {{ user.user.name }} </span>!
      </p>

        <RouterLink
        class="font-bold text-gray-200 bg-teal-500 rounded-lg py-2 px-2 hover:bg-teal-600 hover:text-gray-300"
        :to="{name: 'panel'}"
        >
        Mi Perfil
        </RouterLink>

        <button
        @click="user.logout()"
        type="submit"
        class="font-bold text-gray-200 bg-red-500 rounded-lg py-2 px-2 hover:bg-red-600 hover:text-gray-300"
        >
          Cerrar Sesion
        </button>
      


      </nav>

      <div
      v-else
      class="flex gap-5">

        <RouterLink
        class="font-bold text-gray-200 bg-teal-500 rounded-lg py-2 px-2 hover:bg-teal-600 hover:text-gray-300"
        :to="{name: 'login'}"
        >
        Sign In
        </RouterLink>

        <RouterLink
        class="font-bold text-gray-200 bg-teal-500 rounded-lg py-2 px-2 hover:bg-teal-600 hover:text-gray-300"
        :to="{name: 'register'}"
        >
        Sign Up
        </RouterLink>
        
      </div>

      

    </div>

    <div class="bg-red-500"></div>

    <RouterView />
  </main>
</template>
