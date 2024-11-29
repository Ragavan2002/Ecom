import './index.css'

import { createApp, reactive } from 'vue'
import router from './router'
import App from './App.vue'
import ToastPlugin from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';

import {
  Button,
  Card,
  Input,
  setConfig,
  frappeRequest,
  resourcesPlugin,
} from 'frappe-ui'

let app = createApp(App)

setConfig('resourceFetcher', frappeRequest)


let cartData=localStorage.getItem("cart")
if(!cartData){
  const cartJSON=JSON.stringify({
    items:[]
  })
  localStorage.setItem("cart",cartJSON)
  cartData ={
    items:[]
  }
}
else{
  cartData=JSON.parse(cartData)
}

const cart =reactive(cartData)

app.provide("cart",cart)
app.use(ToastPlugin);
app.use(router)
app.use(resourcesPlugin)

app.component('Button', Button)
app.component('Card', Card)
app.component('Input', Input)

app.mount('#app')
