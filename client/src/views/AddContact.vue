<template>
    <div class="flex justify-center">

        <form @submit.prevent="createContact" class="flex flex-col  box-border h-56 w-2/4 border rounded  p-5  my-5">
            <div class="flex items-center justify-between ">
                <h1 class="mb-2 text-gray-500 w-2/6	 font-bold text-2xl">Name</h1>
                <input class="mb-2 text-gray-700 w-4/6	 text-xl outline-none" v-model="contact.name" type="text"
                    maxlength="40" placeholder="Add Name">
            </div>
            <div class="flex items-center justify-between px-2 ">
                <h1 class="mb-2 text-gray-500 font-bold  w-2/6	 text-2xl">Telefon</h1>
                <input class="mb-2 text-gray-700 text-xl w-4/6 outline-none" v-model="contact.num" maxlength="40"
                    type="number" placeholder="Add tell. number">
            </div>
            <div class="flex items-center justify-between px-2 ">
                <h1 class="mb-2 text-gray-500 font-bold w-2/6 text-2xl">Email</h1>
                <input type="email" v-model="contact.email" maxlength="40"
                    class="mb-2 w-4/6 text-gray-700 text-xl outline-none" placeholder="Add email">
            </div>
            <button submit="sbmit"
                class="px-4 py-2 bg-green-600 text-white rounded-b w-full hover:bg-indigo-800">Save</button>

        </form>



    </div>
</template>

<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

export default {

    setup() {
        const router = useRouter()
        const API_URL = 'http://localhost:4000/api/add'

        const contact = reactive({
            name: '',
            num: '',
            email: ''
        })
        async function createContact() {
            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify({
                        name: contact.name,
                        num: contact.num,
                        email: contact.email
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
            createContact
        }

    }
}
</script>