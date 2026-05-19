<template>

<h1>Мои закладки</h1>

   <div class="mt-10 "><CardList :items="favorites" isfav /></div>

   <div class="flex justify-center items-center flex-col  min-h-[330px]" v-if="dop.length === 0 " >

   <NoBuy imgUrl="./emoji-1.png" title-one="Закладок нет :(" title-two="Вы ничего не добавляли в закладки" />

   </div>

</template>

<script setup>

import axios from 'axios';
import { onMounted, ref } from 'vue';
import CardList from '../components/CardList.vue'
import ButtonBack from '../components/ButtonBack.vue';
import NoBuy from '../components/NoBuy.vue';

const favorites = ref([])
const dop = ref(0)

defineProps({

  imgUrl: String,
  title: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,

  onClickFavorite: Function,
  onClickAdd: Function,
  test: Function,
  id : Number,
  
})


onMounted(async () => 
{
    try{ 
      // const { data } = await axios.get('')
      const { data } = [{"id":3,"item":{"id":7,"title":"Кроссовки Orange Boomb Edition","price":7499,"imageUrl":"/sneakers/sneakers-7.png"}},{"id":4,"item":{"id":8,"title":"Кроссовки Nike Air Max 270","price":15600,"imageUrl":"/sneakers/sneakers-8.png"}},{"id":9,"item":{"id":12,"title":"Кроссовки Converse Chuck Taylor All-Star","price":13000,"imageUrl":"/sneakers/sneakers-12.png"}},{"id":10,"item":{"id":6,"title":"Кроссовки Black Edition","price":16999,"imageUrl":"/sneakers/sneakers-6.png"}}]
      favorites.value = data.map(obj => obj.item)
      dop.value = data
    }catch(e){
        console.log(e);
    }
}
)
</script>