<template>
    <a href="#" class="shadow-md  rounded-sm p-4 space-y-2 flex items-start justify-between flex-col">
        <img :src="product.preview_image" alt="Image">
        <p class="text-base text-gray-800 font-medium mt-2">{{ product.name }}</p>
        <p class="text-xl font-bold text-gray-900">{{ formatCurrecy(product.price ,product.currency) }}</p>
      </a>
</template>

<script>
import { formatCurrecy } from '../utils';
defineProps({
  product: {
    type: Object,
    required: true,
  },
});

</script>
