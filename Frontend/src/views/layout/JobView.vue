<script setup>
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router';
import vacancyAPI from '../../api/vacancyAPI';
import { onMounted,ref } from 'vue';
import { inject } from 'vue';
import { formatCurrency } from '../../helpers'
import { formatString } from '../../helpers'
import { useUserStore } from '../../stores/useUserStore'


const toast = inject('toast')
const route = useRoute()
const router = useRouter()
const store = useUserStore()



const { id } = route.params
const vacancy = ref({})


onMounted(async() => {
    try {
        const job = await vacancyAPI.showVacancy(id)
        vacancy.value = job.data

        
    } catch (error) {

        toast.open({
            message: error.response.data.msg,
            type: 'error'
        })
        setTimeout(() => {
            router.push({name: 'principal'})
        }, 2000)
    }
})


</script>

<template>

    <h1 class="text-6xl text-gray-200 font-extrabold"> Vacante Disponible</h1>
    <h3 class="text-2xl text-gray-200 font-medium">Puesto: {{ vacancy.tittle }}</h3>
    
    <hr>

    <div class="text-white font-bold px-6 text-xl">
        <div class="flex justify-between items-center">

                <div class="flex flex-col ">
                <h2 class="">Empresa</h2>
                <h3 class="text-gray-500">{{ vacancy.company }}</h3>
                </div>

                <div class="flex flex-col">
                    <h2>Ubicacion</h2>
                    <h3 class="text-gray-500">{{ vacancy.location }}</h3>
                </div>

                <div class="flex flex-col">
                    <h2>Contrato</h2>
                    <h3 class="text-gray-500">{{ vacancy.contract !== undefined ? formatString(vacancy.contract) : '' }}</h3>
                </div>

                <div class="flex flex-col">
                    <h2>Salario</h2>
                    <h3 class="text-gray-500">{{ formatCurrency(vacancy.salary)}}</h3>
                </div>
        </div>
    </div>

    <hr>

    <div v-if="route.name === 'job'" class="flex gap-5 text-white font-bold">
        <div class="w-2/3 border border-white p-4 bg-slate-900 rounded-lg">
            <h3 class="text-xl">Descripcion del Puesto:</h3>
            <p class="font-medium text-gray-200 mt-10">{{ vacancy.description }}</p>

            <RouterLink
            v-if="store.identification === vacancy.user"
            :to="{name:'editVacancy'}"
            class="text-white inline-block w-full mt-10 text-center font-bold my-5 bg-teal-500 p-2 rounded-lg">
                Editar Vacante
            </RouterLink>

            <RouterLink
            v-else
            :to="{name:'applyJob'}"
            class="text-white inline-block w-full mt-10 text-center font-bold my-5 bg-yellow-500 p-2 rounded-lg">
                Postular a la Vacante
            </RouterLink>


        </div>

        <div class="w-1/3 border border-white p-4 bg-slate-900 rounded-lg">
            <h3 class="text-xl">Requisitos de Contratacion: </h3>
            <ul class="mt-5">
                <li
                class="text-gray-200 font-medium ml-4 py-2 italic"
                v-for="skill in vacancy.skills"
                >
                {{ skill }}
                </li>
            </ul>

            
        </div>

    </div>
    
    <div v-else>
    <RouterView />
    </div>

    
</template>