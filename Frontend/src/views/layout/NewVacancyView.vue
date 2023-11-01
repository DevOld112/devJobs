<script setup>
import { useRouter } from 'vue-router';
import { inject } from 'vue';
import { FormKit } from '@formkit/vue'
import { reset } from '@formkit/vue';
import Skills from '../../components/Skills.vue';
import { useSkillsStore } from '../../stores/useSkillsStore'
import vacancyAPI from '../../api/vacancyAPI'

const skill = useSkillsStore()
const toast = inject('toast')
const router = useRouter()

const handleSubmit = async(formData) => {

    const skills = skill.selectedSkills

    formData.skills = skills

    try {
        const { data } = await vacancyAPI.createVacancy(formData)
        toast.open({
            message: data.msg,
            type: 'success'
        })
        reset('vacancyForm')

        setTimeout(() => {
            router.push({name: 'principal'})
        }, 1000 )

    } catch (error) {
        console.log(error)
    }
}

</script>

<template>
    <hr>
    <h1 class="text-gray-600 font-bold text-center text-2xl ">Informacion General de la Vacante</h1>

    <FormKit
    id="vacancyForm"
    type="form"
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
        

        <FormKit type="submit">Publicar Vacante</FormKit>


    </FormKit>
</template>