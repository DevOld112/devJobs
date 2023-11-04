<script setup>
import { useRouter } from 'vue-router';
import { FormKit } from '@formkit/vue';
import { inject } from 'vue';
import authApi from '../../api/authApi';

const toast = inject('toast')
const router = useRouter()

const handleSubmit = async(formData) => {
    try {
        const { data } = await authApi.login(formData)
        toast.open({
            message: data.msg,
            type: 'success'
        })

        setTimeout(() => {
            router.push({
            name: 'principal'
        })
        }, 2000)

        
    } catch (error) {
        console.log(error)
        toast.open({
            message: error.response.data.msg,
            type: 'error'
        })
    }
}

</script>

<template>

    <h1 class="text-4xl font-bold text-center text-gray-200 mb-5">Iniciar Sesion</h1>
    <h3 class="text-xl font-bold text-center text-gray-200">Por favor ingresa con tu cuenta</h3>
    <FormKit
        id="registerForm"
        type="form"
        :actions="false"
        incomplete-message="No se pudo enviar, revisa las notificaciones"
        @submit="handleSubmit"
        >

        <FormKit 
        type="email"
        label="Correo Electronico"
        name="email"
        placeholder="appsalon@gmail.com"
        validation="required|email"
            :validation-messages="{
            required:'El Nombre es Obligatorio',
            email: 'Email No Valido'
            }"
        />

        <FormKit 
        type="password"
        label="Password"
        name="password"
        placeholder="Password de usuario - Min 8 Caracteres"
        validation="required|length:8"
            :validation-messages="{
            required:'El Nombre es Obligatorio',
            email: 'El password debe Contener al menos 8 caracteres'
            }"
        />

        <p class="text-gray-200 mt-5 text-center">¿Has Olvidado tu Contraseña?, haz click <a href="" class="text-teal-500 font-bold">Aqui</a></p>

        <FormKit type="submit">Iniciar Sesion</FormKit>

    </FormKit>

</template>