<script setup>
import { RouterView, RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';

const route = useRoute()

console.log(route.path)


</script>

<template>
  <main class="container p-6 space-y-20">
    <div class="flex justify-between gap-5">
      <RouterLink
      :to="{name: 'principal'}"
      class="text-6xl font-bold text-white">devJobs</RouterLink>

      <form>
        <input class="bg-gray-600 text-white" type="text">
        <input class="p-2 text-white border border-gray-300 mx-3 rounded-md italic font-bold hover:bg-white hover:text-gray-900 hover:border-gray-900" type="submit" value="Buscar">
      </form>

    </div>

    <div class="bg-red-500"></div>

    <RouterView />
  </main>
</template>
