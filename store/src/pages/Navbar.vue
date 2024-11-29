<template>
    <div>
        <nav class="p-4 flex items-center justify-between"  >
      <router-link :to="{name:'ProductListPage'}" class="m-3 text-2xl font-bold">Our Store</router-link>  
      <button @click="carDialogShow=true" class="flex flex-start">
        <FeatherIcon class="h-10" name="shopping-cart"/>
        <Badge variant="solid">{{ cart.items.length }}</Badge>
      </button> 
      
    </nav>
    <Dialog :options="{
        title:'Cart List',
        size:'3xl',
        actions :[{
            label:'Proceed to Checkout',
            variant:'solid',
            onClick:(close) =>
            {
                close();
                route.push({
                    name:'CheckoutPage'
                })

            }
        }]

    }" v-model="carDialogShow">
        <template #body-content>
            <ul class="space-y-3">
                <li v-for="(item, index) in cart.items" :key="item.id">#{{ index+1 }}.{{ item.product }}
                    <FormControl v-model="item.qty" type="number" placeholder="Qty" />
                    <Button @click="RemoveCartData(index)" variant="solid" theme="red">Remove item</Button>
                </li>
            </ul>
        </template>    

</Dialog>
</div>
    
</template>

<script setup>
import { FeatherIcon ,Badge,Dialog ,FormControl,Button} from 'frappe-ui';
import { inject,ref } from 'vue';
import { useRouter } from 'vue-router';
const cart=inject("cart")
const route=useRouter();
const carDialogShow=ref(false);

function RemoveCartData(index){
    cart.items.splice(index,1);
}
</script>