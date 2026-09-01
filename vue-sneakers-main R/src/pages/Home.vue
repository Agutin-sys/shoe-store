<script setup>
import {  reactive, watch, ref , onMounted, inject } from 'vue';
import CardList from '../components/CardList.vue';
import axios from 'axios';
import debounce from 'lodash.debounce';

const { cart ,addTocart, removeFromCart } = inject('cart')

const items = ref([])

const selectedItem = ref(null) 

const onClickAddPlus = (item) => {

  if(!item.isAdded){
   addTocart(item)
  }else{
    removeFromCart(item)
  }

}
const fetchItems = async () => {
try{

  const params = {
    sortBy: filters.sortBy,
  }

  if(filters.searchQuery){
    params.title = `*${filters.searchQuery}*`;
  }

  const { data } =  await axios.get('https://2c0c2b705f18f99a.mokky.dev/items')

   items.value  = data.map((obj) => ({
    ...obj,
    isFavorite: false,
    favoritesId: null,
    isAdded: false
   }))
} catch(e){
  console.log(e)
}}

const fetchFavorytes = async () => {
 
try{

  const { data: favorites } = await axios.get(`https://2c0c2b705f18f99a.mokky.dev/favorites`)
 
   items.value  = items.value.map(item => {
    const favorite = favorites.find(favorite => favorite.item_id === item.id);


    if(!favorite){
      return item
    }

    return {
      ...item,
      isFavorite: true,
      favoritesId: favorite.id,
    }
   })
     }catch(e){console.log(e)}
}

const addToFavorytes = async (item) => {
try{
  
   if(!item.isFavorite){
       const obj = {
        item_id: item.id,
      }
      item.isFavorite = true

      const {data} = await axios.post(`https://2c0c2b705f18f99a.mokky.dev/favorites`, obj)
      
      item.favoritesId = data.id

   }else{
    item.isFavorite = false;
 
    await axios.delete(`https://2c0c2b705f18f99a.mokky.dev/favorites/${item.favoritesId}`)
    item.favoritesId = null;
   }
    }catch(e){
      console.log(e);
      
    }
}


const openInfoModal = (item) => {
  selectedItem.value = item
}

const onChangeselect = (event) => {
  filters.sortBy = event.target.value
}
const onChangeSearchInput = debounce((event) => {
  filters.searchQuery = event.target.value
}, 500)
const filters = reactive({

    sortBy: 'title',
    searchQuery: ''
  
})

onMounted( async () =>{

  const localCart = localStorage.getItem('cart')

  cart.value = localCart ? JSON.parse(localCart) : [] ;



  await fetchItems();
  
  await fetchFavorytes();

    items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id)

  }));

})

watch(cart, () => {
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: false
  }))
})

watch(filters, fetchItems)
</script>

<template>

     <div class="flex justify-between  items-center  ">

<div class="flex items-center justify-center h-1">
  <h2 class="text-3xl hidden sm:block font-bold">Все кросовки</h2>
</div>

      <div class="flex lg:gap-4 gap-5 mt-5  sm:justify-center">

      <select @change="onChangeselect" class="dark:bg-slate-700 p-2  dark:text-slate-100" name="" id="">
        <option value="name">По названию</option>
        <option value="price">Цена ↓</option>
        <option value="-price">Цена ↑</option>
      </select>

      <div class="relative   ">

        <img src="/search.svg" class="absolute left-4 top-3" alt="">
        <input
  @input="onChangeSearchInput"
  class="border dark:bg-slate-700 focus:border-gray-400 rounded-md outline-none py-2 pl-10 pr-4
         w-full sm:w-auto max-w-xs sm:max-w-sm md:max-w-md
         mx-auto sm:mx-0"
  type="text"
  placeholder="поиск"
>

        </div>

      </div>

     </div>

<div class="mt-10"><CardList :items="items" @addToFavorytes="addToFavorytes" @addTocart="onClickAddPlus" /></div>
</template>
