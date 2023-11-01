<script setup>
import { useSkillsStore } from '../stores/useSkillsStore';
 
const skills = useSkillsStore()



defineProps({
    skill:{
        type: Object
    }
})

</script>

<template>
    
        <div 
            :class="skills.isSkillSelected(skill) ? 'bg-teal-500 border border-white' : 'border border-teal-500 p-4 text-white'"
            @click="skills.selectSkills(skill)"
            class="border border-teal-500 p-4 text-white font-bold text-center hover:bg-teal-500 hover:border-white">
                {{ skill }}
        </div>



</template>