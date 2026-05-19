<script setup>
import { computed, provide,ref, watch } from 'vue';
import Header from './components/Header.vue';
import Driver from './components/driver.vue';
import InfoCartOpen from './components/InfoCartOpen.vue';



const BlogCartInfoCart = ref(false)


const cart = ref([])

const totalPrice = computed(() => cart.value.reduce((acc,item) => acc + item.price, 0 ))
const vatPrice = computed(() => Math.round((totalPrice.value *5) / 100))


const draverOpen  = ref(false)


const closerDrawer = () => {

  draverOpen.value = false

}

const openDrawer = () => {

  draverOpen.value = true

}


const closerBlogCart = async () => {

  BlogCartInfoCart.value = !BlogCartInfoCart.value
}

const addTocart = (item) => {
  cart.value.push(item)
  item.isAdded = true
}

const removeFromCart = (item) => {

  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false

}



watch(cart, 
() => {

  localStorage.setItem('cart', JSON.stringify(cart.value))
},
{ deep: true}

)


provide('cart', {
  cart,
  closerDrawer,
  openDrawer,
  addTocart,
  removeFromCart,
})


/*Корзина */

const OpenInfoPanelItem = async (item) => {

  closerBlogCart()

  openInfoModal(item)

}

provide('OpenInfoPanelItem', OpenInfoPanelItem)

const selectedItem = ref(null) 

const openInfoModal = (item) => {
  selectedItem.value = item
}

</script>

<template>

<InfoCartOpen
  v-if="BlogCartInfoCart"
  @OpenInfoPanelItem="OpenInfoPanelItem"
  :title="selectedItem.title"
  :price="selectedItem.price"
  :imageUrl="selectedItem.imageUrl"
/>

<Driver v-if="draverOpen"
     :total-price="totalPrice"
      :vat-Price="vatPrice"
       @createOrder="createOrder"
/> 

  <div class="w-4/5 m-auto dark:bg-slate-800 dark:text-white bg-white h- roundet-xl shadow-xl mt-10">
    
   <Header :total-price="totalPrice" @openDrawer="openDrawer" />

   <div class="lg:p-10 ">
     <RouterView />
   </div>
    
  </div>

</template>

