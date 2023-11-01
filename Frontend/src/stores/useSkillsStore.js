import { defineStore } from 'pinia'
import { ref, onMounted, computed } from 'vue'

export const useSkillsStore = defineStore('skill', () => {

    const selectedSkills = ref([])

    const optionSkills = ['HTML5', 'CCS3', 'CCSGRID', 'FLEXBOX', 'JAVASCRIPT', 'REACT' , 'VUEJS', 'NODEJS', 'PYTHON', 'MONGODB', 'POSTGRESQL', 'TAILWINCSS', 'MVC', 'ANGULAR', 'TYPESCRYPT']


    function selectSkills(skill) {
        if (!selectedSkills.value.some(selectedSkill => selectedSkill === skill)) {
            console.log(selectedSkills.value)
            selectedSkills.value.push(skill);

            return selectSkills.value
    } else {
       
        selectedSkills.value = selectedSkills.value.filter(selectedSkill => selectedSkill !== skill)
        console.log(selectedSkills.value)
    }
}

const isSkillSelected = computed(() => {
    return (skill) => selectedSkills.value.some(habilidades => habilidades === skill)
})




    return {
        selectedSkills,
        selectSkills,
        isSkillSelected,
        optionSkills
        
    }

})