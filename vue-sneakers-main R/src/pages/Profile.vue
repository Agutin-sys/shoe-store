<template>

 <!-- <div v-for="order in profile" :key="order.id" class="mt-10"  v-auto-animat>
  <div class="relative flex bg-white border border-slate-100 rounded-3xl p-8 transition shadow-xl">
    <div class=""><CardList :items="order.items" class="orders-list" isfav /></div>
        <div class="justify-end flex self-end "> <div class="w-24">{{ order.totalPrice  }} ₽</div></div>
    <div class="justify-center flex qwe">
      <img
        @click="deleteOrder(order.id)"
        class="opacity-50 w-screen hover:opacity-100 cursor-pointer  transition"
        src="/close.svg"
        alt="Удалить"
      >
      </div>
    </div>
  </div> -->

 <div class="p-6 max-w-4xl mx-auto">
    <h1 class="text-2xl font-bold mb-6">Мои заказы</h1>
    <div
      v-for="order in profile"
      :key="order.id"
      class="mb-6 p-6 border border-gray-200 dark:border-slate-700 dark:bg-slate-700 rounded-xl shadow-sm bg-white"
    >
      <div class="space-y-3">
        <div
          v-for="item in order.items"
          :key="item.id"
          class="flex gap-3"
        >
        <div class="flex items-center gap-3 flex-1">
          <img
            :src="item.imageUrl"
            @click="() => OpenInfoPanelItem(item)"
            :alt="item.title"
            class="w-12  h-12 object-cover rounded cursor-pointer"
          />
          <p class="font-medium hidden sm:block">{{ item.title }}</p>
          </div>

          <div class="flex items-center items-center">
            <p class="text-gray-600  dark:text-white ">{{ item.price }} ₽</p>
          </div>

          

        </div>

      </div>
      <div class="mt-4 text-right">
        <button
          @click="deleteOrder(order.id)"
          class="text-red-500 hover:text-red-700 text-sm font-semibold transition"
        >
          Отменить заказ на сумму: <span class="text-black dark:text-white ">{{ order.totalPrice }} ₽</span>
        </button>
      </div>
    </div>
  </div>

  <div class="flex justify-center items-center flex-col  min-h-[330px]" v-if="profile.length === 0 " >

   <NoBuy imgUrl="./emoji-2.png" title-one="У вас нет заказов" title-two="" titleTree="Оформите хотя бы один заказ." />

   </div>
<div class=" flex justify-end" v-if="!profile.length == 0" >
    <button class="p-2 bg-red-600 rounded-lg text-white text-xl " @click="def()  ">выход</button>
</div>
</template>

<script setup>
import { ref, onMounted,inject } from 'vue'
import { useRouter } from 'vue-router';
import NoBuy from '../components/NoBuy.vue';

import axios from 'axios';

const profile = ref([])

const OpenInfoPanelItem = inject('OpenInfoPanelItem')

const SignInPerson = inject('SignInPerson')

const router = useRouter();

const def = async () =>{
    localStorage.removeItem('userEmail')
    SignInPerson.value = null
    await router.push('/favorites')
}



const fetchItemsProf = async () => {
  try{

        const { data } = [{"items":[{"id":10,"title":"Кроссовки Adidas Ultraboost","price":11500,"imageUrl":"/sneakers/sneakers-10.jpg","isFavorite":false,"favoritesId":null,"isAdded":true},{"id":6,"title":"Кроссовки Black Edition","price":16999,"imageUrl":"/sneakers/sneakers-6.jpg","isFavorite":false,"favoritesId":null,"isAdded":true}],"totalPrice":28499,"mail":"regi654ster999@gmail.com","id":2},{"items":[{"id":10,"title":"Кроссовки Adidas Ultraboost","price":11500,"imageUrl":"/sneakers/sneakers-10.png","isFavorite":true,"favoritesId":1,"isAdded":true},{"id":6,"title":"Кроссовки Black Edition","price":16999,"imageUrl":"/sneakers/sneakers-6.png","isFavorite":true,"favoritesId":2,"isAdded":true},{"id":12,"title":"Кроссовки Converse Chuck Taylor All-Star","price":13000,"imageUrl":"/sneakers/sneakers-12.png","isFavorite":false,"favoritesId":null,"isAdded":true},{"id":5,"title":"Кроссовки Future Rider","price":9550,"imageUrl":"/sneakers/sneakers-5.png","isFavorite":false,"favoritesId":null,"isAdded":true},{"id":11,"title":"Кроссовки Puma Clyde All-Pro","price":7600,"imageUrl":"/sneakers/sneakers-11.png","isFavorite":false,"favoritesId":null,"isAdded":true},{"id":7,"title":"Кроссовки Orange Boomb Edition","price":7499,"imageUrl":"/sneakers/sneakers-7.png","isFavorite":true,"favoritesId":3,"isAdded":true}],"totalPrice":66148,"mail":"register999@gmail.com","id":3}]
        profile.value = data.filter(order => order.mail === SignInPerson.value)
    }catch(e){
        console.log(e);
    }
}

const deleteOrder = async (index) => {

    try {
    await axios.delete(`ссылка/${index}`)

    profile.value = profile.value.filter(order => order.id !== index)


    // знач надо заново просчитать что бы заново отобразить 
    // взяли изначальные знач и отобрали те которые не равны индексу по ид
    // если ид не равен индексу то он попадет в конечный список
    
    } catch (e) {
      console.log(e)     
    }
}
onMounted(async () => {
  await fetchItemsProf()
})

</script>

<style>

.qwe{
  max-width: 50px;
}

</style>
