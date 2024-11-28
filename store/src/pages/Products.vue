<template>
  <div >
    <h1 class="m-3 text-2xl font-bold">Our Store</h1>    
    <h2 class="my-4 font-semibold text-lg mb-2">Our Products</h2>
    <div class="mt-4 grid grid-cols-4 gap-3" v-if="productList">
      <a href="#" class="shadow-md  rounded-sm p-4 space-y-2 flex items-start justify-between flex-col" v-for="product in productList" :key="product.name">
        <img :src="product.preview_image" alt="Image">
        <p class="text-base text-gray-800 font-medium mt-2">{{ product.name }}</p>
        <p class="text-xl font-bold text-gray-900">{{ formatCurrecy(product.price ,product.currency) }}</p>
      </a>
    


    </div>
    <ProductCard :product="product" />
  </div>
</template>

<script setup>
import { createListResource } from 'frappe-ui';
import { computed } from 'vue';
import {formatCurrecy} from '../utils';
const productsResource =createListResource({
  doctype:"Product",
  fields:["name","preview_image","price","currency"],
  auto:true
})

const productList = computed(() => {
  if(productsResource.list.data){
    return productsResource.list.data;
  }
  return [];
})

</script>