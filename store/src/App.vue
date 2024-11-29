<template>
  <div>
    <Navbar/>
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './pages/Navbar.vue';
import {watch ,inject} from "vue";

const cart=inject("cart")

watch(cart.items,()=>{
  console.log("watch")
  localStorage.setItem("cart",JSON.stringify(cart))
})
</script>