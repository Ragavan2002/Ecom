<template>
    <div class="p-5" v-if="data">
        <h1 class="font-black text-gray-900 text-3xl ">{{ data.name }}</h1>
        <div v-for="imagedata in data.images" :key="imagedata.id">

        <div @click="currentPreviewImage =imagedata.image"  class="flex gap-3 flex-col w-fit mt-5">
        <img class="h-16 border-2 border-gray-600/25 rounded hover:bg-black-overlay-50 cursor-pointer"
        
        :src="imagedata.image"  alt="Product Image">
        
    </div>
</div>
<div>{{ data.description }}</div>



    <img class="h-20 w-25" :src="currentPreviewImage" alt="">
    <div class="space">
        <p>{{ formatCurrecy(data.price,data.currency)  }}</p>
        <Button @click="addtoCart" variant="solid" theme="green" >
            <template #prefix>
                <FeatherIcon class="h-5" name="shopping-cart"></FeatherIcon>    
            </template>
            Add to Cart
        
        </Button>
    </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { createDocumentResource,Button,FeatherIcon } from 'frappe-ui';
  import { computed ,ref,inject } from 'vue';
  import {formatCurrecy} from '../utils';
  import {useToast} from 'vue-toast-notification';
  // Access route parameters
  const toast=useToast();

  const route = useRoute();
  const currentPreviewImage =ref(null);
  const cart =inject("cart");
  const productDoc=createDocumentResource({
    doctype:'Product',
    name:route.params.name,
    auo:true,
    onSuccess(data){
        currentPreviewImage.value = data.images[0].image;
    }
  })

  const data=computed(() =>{
    if(productDoc.doc){
    return productDoc.doc
    }
  })

  function addtoCart(){
    const productName=route.params.name;
    cart.items.push({
        "product": productName,
        "qty":1

    })
  }
  </script>
  