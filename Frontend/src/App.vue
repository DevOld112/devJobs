<script setup>
import { RouterView } from 'vue-router'
import { useVacancyStore } from './stores/useVacancyStore';

const store = useVacancyStore()

console.log(store.jobs)


</script>

<template>
  <RouterView />

</template>

