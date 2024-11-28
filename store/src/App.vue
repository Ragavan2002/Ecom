<template>
  <div>
    <router-view />
  </div>
</template>

<script setup>
import { createListResource } from 'frappe-ui';

const productsResource =createListResource({
  doctype:"Product",
  fields:["name","preview_image,price,currency"],
  auto:true
})

</script>
