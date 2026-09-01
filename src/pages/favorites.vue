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
      const { data } = await axios.get('https://2c0c2b705f18f99a.mokky.dev/favorites?_relations=items')
      favorites.value = data.map(obj => obj.item)
      dop.value = data
    }catch(e){
        console.log(e);
    }
}
)
</script>