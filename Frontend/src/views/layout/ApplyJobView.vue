<script setup>
import { FormKit } from '@formkit/vue';
import { useUserStore } from '../../stores/useUserStore';
import candidateApi from '../../api/candidateApi'
import { inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const store = useUserStore()
const toast = inject('toast')
const route = useRoute()
const router = useRouter()


const { id } = route.params

const handleSubmit = async(formData) => {
    const candidate  = { name: store.user.name, email: store.user.email, cv: formData.cv[0].name }

    console.log(candidate)

    try {
        const { data } = await candidateApi.applyVacancy(id, candidate)
        toast.open({
            message: data.msg,
            type: 'success'
        })

        setTimeout(() => {
            router.push({name: 'principal'})
        }, 2000 )

    } catch (error) {
        console.log(error)
    }
}

</script>

<template>
    <h1 class="text-4xl text-center text-gray-200 font-bold">Postulacion</h1>

    <FormKit
    id="vacancyForm"
    type="form"
    :actions="false"
    @submit="handleSubmit"
    classes="flex justify-center w-40"
    enctype="multipart/form-data"
    >

        <FormKit
        type="file"
        label="Carga tu CV"
        name="cv"
        help="Solo se admiten archivos en formato PDF"
        multiple="false"
        accept=".pdf"
        />

        <FormKit type="submit">Enviar Postulacion</FormKit>

    </FormKit>

</template>