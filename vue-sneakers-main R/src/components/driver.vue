<template>

<div @click="() => closerDrawer()" class="fixed cursor-pointer top-0 left-0 w-full h-full bg-black/50 z-10"></div>
<div class="bg-white dark:bg-slate-700 dark:border-slate-700 w-96 h-full fixed right-0 top-0 z-20 p-8">  
<drierhead />
<CartListItems />

 <div v-if="!totalPrice  || orderId" class="flex h-full  items-center">
<div class="flex flex-col justify-center ">
<InfoBlog

 v-if=" !totalPrice && !orderId"
   title="Корзина пуста"
     description="Добавь хотя бы одну пару кроссовок."
      imageURL="/package-icon.png" />

<InfoBlog
 v-if="orderId"
        title="Заказ оформлен"
            :description="`Ваш заказ #${orderId} скоро будет передан курьерской службе`"
                imageURL="/order-success-icon.png"/>
<ButtonBack :onClick="closerDrawer" />
</div>
</div>

<div class=" flex flex-col h-full  " v-else="">

  <div class="" v-if="totalPrice ">

    <div class="flex gap-2 my-6">
        <span>Итого: </span>
        <div class="flex-1 border-b border-slite-400 border-dashed "></div>
        <b>{{ totalPrice }} ₽</b>
    </div>

     <div class="flex gap-2">

        <span>Налог в 5%: </span>

        <div class="flex-1 border-b border-slite-400 border-dashed "></div>

        <b>{{ vatPrice }} ₽</b>
        
  </div>
  <button

@click="createOrder"
:disabled="buttonCartDisabled"
class="bg-lime-500 disabled:bg-slate-400 w-full  rounded-xl mt-5 py-3 text-white hover:bg-lime-600 transition active:bg-lime-700  ">Оформить заказ</button>


</div>


 
  </div>
</div>

</template>

<script setup>

import drierhead from './drierhead.vue';
import CartListItems from './CartListItems.vue';
import { computed, inject,  ref } from 'vue';
import InfoBlog from './infoBlog.vue'
import ButtonBack from './ButtonBack.vue';
import axios from 'axios';


const SignInPerson = inject('SignInPerson')

const orderId = ref(null)


const  {
    cart,
    closeDraver,
} = inject('cart')

const props = defineProps({

    totalPrice: Number,
    vatPrice: Number,
    isCreateOrder: Boolean,
   
})

const {closerDrawer} = inject('cart');

const emit = defineEmits(['createOrder'])

const isCreateOrder = ref(false)

const buttonCartDisabled = computed(() => 
isCreateOrder.value || cartIsEmpty.value)

const createOrder = async (item) => {
  try{

    if(!SignInPerson.value){
      alert('вы не вошли')
    }else{

    isCreateOrder.value = true

    // const { data } = await axios.post('ссылка',{

    //   items: cart.value,
    //   totalPrice: props.totalPrice,
    //   mail: SignInPerson.value,
    // })

    const { data } = [{"items":[{"id":10,"title":"Кроссовки Adidas Ultraboost","price":11500,"imageUrl":"/sneakers/sneakers-10.jpg","isFavorite":false,"favoritesId":null,"isAdded":true},{"id":6,"title":"Кроссовки Black Edition","price":16999,"imageUrl":"/sneakers/sneakers-6.jpg","isFavorite":false,"favoritesId":null,"isAdded":true}],"totalPrice":28499,"mail":"regi654ster999@gmail.com","id":2},{"items":[{"id":10,"title":"Кроссовки Adidas Ultraboost","price":11500,"imageUrl":"/sneakers/sneakers-10.png","isFavorite":true,"favoritesId":1,"isAdded":true},{"id":6,"title":"Кроссовки Black Edition","price":16999,"imageUrl":"/sneakers/sneakers-6.png","isFavorite":true,"favoritesId":2,"isAdded":true},{"id":12,"title":"Кроссовки Converse Chuck Taylor All-Star","price":13000,"imageUrl":"/sneakers/sneakers-12.png","isFavorite":false,"favoritesId":null,"isAdded":true},{"id":5,"title":"Кроссовки Future Rider","price":9550,"imageUrl":"/sneakers/sneakers-5.png","isFavorite":false,"favoritesId":null,"isAdded":true},{"id":11,"title":"Кроссовки Puma Clyde All-Pro","price":7600,"imageUrl":"/sneakers/sneakers-11.png","isFavorite":false,"favoritesId":null,"isAdded":true},{"id":7,"title":"Кроссовки Orange Boomb Edition","price":7499,"imageUrl":"/sneakers/sneakers-7.png","isFavorite":true,"favoritesId":3,"isAdded":true}],"totalPrice":66148,"mail":"register999@gmail.com","id":3}]
    
    cart.value = []

    orderId.value = data.id
  }

  }catch(e){
    console.log(e),
    console.log(e.response),
    console.log(e.request)
  }finally{
    isCreateOrder.value = false
  }
}
const cartIsEmpty = computed(() => {
  cart.value.length === 0 
})

</script>