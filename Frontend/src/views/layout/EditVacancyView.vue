<script setup>
import { FormKit, reset } from '@formkit/vue'
import Skills from '../../components/Skills.vue';
import { useSkillsStore } from '../../stores/useSkillsStore'
import { useVacancyStore } from '../../stores/useVacancyStore'
import vacancyAPI from '../../api/vacancyAPI';
import { ref , onMounted, inject, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';

const vacante = useVacancyStore()
const toast = inject('toast')
const skill = useSkillsStore()
const route = useRoute()
const router = useRouter()


const { id } = route.params


onMounted(async() => {

    try {
        const { data } = await vacancyAPI.showVacancy(id)
        vacante.setSelectedVacancy(data)

    } catch (error) {
        console.log(error)
    }
    
})


const handleSubmit = async(formData) => {

    const skills = skill.selectedSkills
    formData.skills = skills

    try {
        await vacancyAPI.updateVacancy(id, formData)
        toast.open({
            message: 'Vacante Actualizada Correctamente',
            type:'success'
        })
        reset('vacancyForm')
        setTimeout(() => {
            router.push({name:'job', id: id})
        }, 2000)
    } catch (error) {
        toast.open({
            message: error.response.data,
            type: 'error'
        })
    }
    
}

</script>

<template>


    <div>
        <h2 class="text-gray-200 font-extrabold text-4xl mb-5">Editando Vacante</h2>
        <hr>
        <h3 class="mt-5 text-xl text-gray-200 text-center">Informacion General </h3>
        <FormKit
        id="vacancyForm"
        type="form"
        :value="vacante.vacancy"
        :actions="false"
        @submit="handleSubmit"
        classes="flex justify-center w-40"
        >

            <FormKit
            type="text"
            label="Titulo"
            name="tittle"
            validation="required|tittle"
            placeholder="Ej: React Developer"
            :validation-messages="{
                required: 'El Titulo del Puesto es obligatorio'
            }"
            />

            <FormKit
            type="text"
            label="Empresa"
            name="company"
            placeholder="Empresa Contrata"
            validation="required|tittle"
            :validation-messages="{
                required: 'El nombre de la compañia es obligatorio'
            }"
            />

            <FormKit
            type="text"
            label="Ubicacion"
            name="location"
            placeholder="Ej: Colombia o Remoto"
            validation="required|tittle"
            :validation-messages="{
                required: 'La ubicacion del Puesto es obligatoria'
            }"
            />

            <FormKit
            type="text"
            label="Salario"
            name="salary"
            placeholder="Ej: $500USD"
            validation="required|tittle"
            :validation-messages="{
                required: 'El Salario del Puesto es obligatorio'
            }"
            />

            <FormKit
            type="select"
            label="Contrato"
            name="contract"
            validation="required|tittle"
            :validation-messages="{
                required: 'El Contrato del Puesto es obligatorio'
            }">

                <option value="" disabled selected>Selecciona un contrato</option>
                <option value="tiempo-completo">Tiempo Completo</option>
                <option value="tiempo-parcial">Tiempo Parcial</option>
                <option value="temporal">Temporal</option>
            </FormKit>

            <h1 class="text-gray-600 font-bold text-center text-2xl"> Descripcion del Puesto </h1>
            
            <FormKit
            type="textarea"
            label="Descripcion del Puesto"
            name="description"
            validation="required"
            :validation-messages="{
                required: 'Los comentarios son obligatorios'
            }" 
            />

            <h1 class="text-gray-600 font-bold text-center text-2xl"> Conocimientos </h1>

            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">

                <Skills
                v-for="skill in skill.optionSkills"
                :skill="skill"
                name="skills"
                />

            </div>
            

            <FormKit type="submit">Actualizar Vacante</FormKit>


        </FormKit>
    </div>
</template>