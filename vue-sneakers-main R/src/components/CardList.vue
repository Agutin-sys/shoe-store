
<script setup>

import Card from './card.vue'

import { inject } from 'vue'

defineProps({
  items: Array,
  isfav: Boolean
})

const emit = defineEmits(['addToFavorytes', 'addTocart'])

const OpenInfoPanelItem = inject('OpenInfoPanelItem')


</script>

<template>
   <div class="grid m-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8  " v-auto-animate>
     <Card  

     v-for="item in items"
     :key = "item.id"
     :price="item.price" 
     :title="item.title" 
     :imgUrl="item.imageUrl" 
     :onClickAdd = " isfav ? null : () => emit('addTocart', item)"
     :onClickFavorite=" isfav ? null :() => emit('addToFavorytes', item)"
     :OpenInfoPanelItem="() => OpenInfoPanelItem(item)"
     :isFavorite="item.isFavorite"
     :isAdded="item.isAdded"
     
     />

   </div>


</template>
