<template>
    <div>
        <h1>Checkout</h1>
        <p v-if="cart.items.length ===0">Cart Empty</p>
        <Button v-else :loading="placeOrderResource.loading " @click="placeOrderResource.submit()">PLace Order</Button>
        <ErrorMessage :message="placeOrderResource.error"/>
    </div>
</template>

<script setup>

import {Button,ErrorMessage, createResource } from 'frappe-ui';
import { inject } from 'vue';

const cart= inject("cart")

const placeOrderResource=createResource({
    url:'ecom.api.place_order',
    makeParams(){
        return{
            products: cart.items
        }
    }
})
</script>