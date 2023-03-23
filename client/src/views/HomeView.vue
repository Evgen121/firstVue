<template >
  <main class="flex justify-center  ">
    <div class="w-full  ">
      <!-- post card -->
      <section class="px-2   ">
        <div class="">
          <h1>Search Life</h1>
          <input type="text" v-model="item" placeholder="search" />
        </div>

        <div class=" flex flex-col   ">
          <form class="flex flex-col w-full  h-56 lg:w-2/4 border rounded hover:bg-gray-300 p-5  my-5"
            v-for="contact in contacts" :key="contact._id">
            <div class="flex items-center justify-between px-2 ">
              <h1 class="mb-2 text-gray-500  w-2/6	 font-bold text-xl">Name</h1>
              <h3 class="mb-2 text-gray-700 w-4/6  font-bold text-xl">{{ contact.name }}</h3>
            </div>
            <div class="flex items-center justify-between px-2">
              <h1 class="mb-2 text-gray-500  w-2/6	 font-bold text-xl">Telefon</h1>
              <h3 class="mb-2 text-gray-700 w-4/6  font-bold text-xl"> {{ contact.num }}</h3>
            </div>
            <div class="flex items-center justify-between px-2">
              <h1 class="mb-2 text-gray-500  w-2/6	 font-bold text-xl">Email</h1>
              <h3 class="mb-2 text-gray-700 w-4/6  font-bold text-xl"> {{ contact.email }}</h3>
            </div>
            <div class="flex mt-2">
              <button submit="sbmit"
                class="px-4 py-2 m-2 bg-indigo-600 text-white rounded w-full hover:bg-indigo-800">Call</button>
              <button submit="sbmit" class="px-4 py-2 m-2 bg-green-600 text-white rounded w-full hover:bg-green-800"
                @click="editContact(contact._id)">Edit</button>
              <button submit="sbmit" class="px-4 py-2 m-2 bg-red-400 text-white rounded w-full hover:bg-red-800"
                @click="removeContact(contact._id)">Delet</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  </main>
</template>

<script>

import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'HomeView',
  components: {

  },



  setup() {
    const router = useRouter()
    const contacts = ref([])
    const item = ref('')


    const API_URL = 'http://localhost:4000/api'

    onMounted(() => {
      getContacts()
    })

    async function getContacts() {
      try {
        const response = await fetch(API_URL)
        const data = await response.json()
        contacts.value = data
        /*  return json.filter(contact => contact.name.toLowerCase.includes(search)) */

      } catch (error) {
        console.log(error)
      }
    }
    async function removeContact(_id) {
      await fetch(`${API_URL}/contact/${_id}`, {
        method: 'DELETE',
      })
      getContacts()
    }
    async function editContact(_id) {
      router.push({
        name: 'Update',
        params: {
          id: _id,
        }
      })
    }


    //SEARCH//
    const itemContacts = computed(() => {
      return contacts.value.filter((contact) => contact.indexOf(item.value) !== -1)
    })








    return {
      contacts,
      getContacts,
      removeContact,
      editContact,
      itemContacts,
      item,



    }

  }




} 
</script>
