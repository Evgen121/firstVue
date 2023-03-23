<template>
    <div class="flex justify-center">

        <form :contact="contact" @submit.prevent="updateContact"
            class="flex flex-col  h-56 w-2/4 border rounded  p-5  my-5">
            <div class="flex items-center justify-between px-2  ">
                <h1 class="mb-2 text-gray-500 font-bold w-2/6	 text-2xl">Name</h1>
                <input class="mb-2 text-gray-700 w-4/6 text-xl" type="text" v-model="contact.name" placeholder="Add Name">
            </div>
            <div class="flex items-center justify-between px-2  ">
                <h1 class="mb-2 text-gray-500 w-2/6	 font-bold text-2xl">Telefon</h1>
                <input class="mb-2 text-gray-700 w-4/6 text-xl" type="number" v-model="contact.num"
                    placeholder="Add tell. number">
            </div>
            <div class="flex items-center justify-between  px-2 ">
                <h1 class="mb-2 text-gray-500 w-2/6	 font-bold text-2xl">Email</h1>
                <input type="email" class="mb-2 w-4/6 text-gray-700 text-xl" v-model="contact.email"
                    placeholder="Add email">

            </div>
            <button type="sbmit"
                class="px-4 py-2 bg-green-600 text-white rounded-b w-full hover:bg-indigo-800">Save</button>
        </form>



    </div>
</template>
<script>
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue'
export default {

    setup() {
        const router = useRouter()
        const route = useRoute()

        const API_URL = 'http://localhost:4000/api/'

        const contact = ref({
            name: '',
            num: '',
            email: ''
        })
        onMounted(() => {
            getContact()
        })
        async function getContact() {
            const { id } = route.params
            const response = await fetch(`${API_URL}/contact/${id}`)
            const json = await response.json()
            contact.value = json
        }
        async function updateContact() {
            try {
                const { id } = route.params
                const response = await fetch(`${API_URL}/edit/${id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                    },

                    body: JSON.stringify({
                        name: contact.value.name,
                        num: contact.value.num,
                        email: contact.value.email

                    })
                })
                await response.json()
                router.push('/')

            } catch (error) {
                console.log(error)
            }
        }



        return {
            contact,
            updateContact
        }

    }
}
</script>