<template>
  <div class="max-w-screen-xl mx-auto h-screen grid grid-rows-loyout">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';


</script>
