<template>
    <header class="px-2 border-b h-14  flex items-center justify-between  ">
        <h1 class="uppercase font-bold text-logo-main text-purple-800"> Yevhen Malyi</h1>
        <nav class="flex items-center ">
            <ul class="inline-flex items-center">
                <li>
                    <h1 class="text-gray-500 font-semibold inline-block py-3 px-2 border-b-2 border-transparent hover:text-purple-800 hover:border-purple-800"
                        @click="$router.push('/')">Home</h1>
                </li>
                <li>
                    <h1 class="text-gray-500 font-semibold inline-block py-3 px-2 border-b-2 border-transparent hover:text-purple-800 hover:border-purple-800"
                        @click="$router.push('/contact/add')">Add</h1>
                </li>

            </ul>
        </nav>
    </header>
</template>


<script>
export default {
    name: 'Header'
}
</script>
