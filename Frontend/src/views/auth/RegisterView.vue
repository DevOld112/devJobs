<script setup>
import { FormKit, reset } from '@formkit/vue';
import authApi from '../../api/authApi'
import { inject } from 'vue';
import { useRouter } from 'vue-router';

const toast = inject('toast')
const router = useRouter()


const handleSubmit = async(formData) => {


    try {
        const { data } = await authApi.register(formData)
        reset('registerForm')

        toast.open({
            message: data.msg,
            type: 'success' 
        })

        setTimeout(() => {
            router.push({name: 'authLayout'})
        }, 2000)
        
    } catch (error) {
        console.log(error)
    }
    
    
}
</script>

<template>
    <h3 class="text-xl font-bold text-gray-200 text-center">Formulario de Registro </h3>

    <FormKit
    id="registerForm"
    type="form"
    :actions="false"
    incomplete-message="No se pudo enviar, revisa las notificaciones"
    @submit="handleSubmit"
    >

    <FormKit
            type="text"
            label="Nombre"
            name="name"
            placeholder="Tu Nombre"
            validation="required|length:3"
            :validation-messages="{
            required:'El Nombre es Obligatorio',
            length: 'El Nombre es muy corto'
            }"
        />

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

            <FormKit type="submit">Registrarme</FormKit>

    </FormKit>
</template>