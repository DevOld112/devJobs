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

const handleSubmit = async(data) => {

    const body = new FormData()

    // Agregar el nombre y email al FormData
    body.append('name', store.user.name);
    body.append('email', store.user.email);

    //Agregar el file de cv a la base de datos

    data.cv.forEach((fileItem) => {
        body.append('cv', fileItem.file)
    })

    try {
        const formdata  = await candidateApi.applyVacancy(id, body)
        console.log(formdata)
        toast.open({
            message: formdata.data.msg,
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
    <FormKit
        v-if="!complete"
        id="candidateForm"
        type="form"
        @submit="handleSubmit"
        :actions="false"
        >

        <FormKit
            type="file"
            label="Completa tu Postulacion"
            name="cv"
            help="Sube tu CV, solo se permite formato PDF"
            accept=".pdf"
            validation="required"
        />

        <FormKit type="submit">Enviar Postulacion</FormKit>
    </FormKit>
    
    </template>