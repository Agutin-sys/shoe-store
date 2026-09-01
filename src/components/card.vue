<template>



    <div v-auto-animate class="relative transition  dark:bg-slate-700 dark:text-slate-100 dark:border-slate-700 rounded-lg bg-white border justify-center border-slate-100 roundet-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl ">
      <img v-if="onClickFavorite" @click="onClickFavorite" :src="!isFavorite ? `/like-1.png` : `/like-2.png`" class="absolute w-10 dark:bg-slate-700 top-8 left-8 " alt="like 1">
      <img :src="imgUrl" @click="OpenInfoPanelItem" alt="">

      <p class=" ms:max-w-[100px] max-w-xs multi-line-truncate ">{{ title }}</p>
    
      <div class=" mt-5">

        <div class=" flex justify-between">

          <div class="flex items-center">

            <span class="text-slate-400">Цена: </span>
            <b>{{ price }}</b>
          
          </div>

          <div class="flex alight">
          <img v-if="onClickAdd" class=" min-w-[10px] max-w-[32px] " @click="onClickAdd" :src="!isAdded ? `/plus.png` : `/checked.svg`" alt="plus">
          </div>
        </div>
      </div>
    </div>



</template>

<script setup>
defineProps({

  imgUrl: String,
  title: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,

  onClickFavorite: Function,
  onClickAdd: Function,
  OpenInfoPanelItem: Function,
  id : Number,
  
})

</script>

<style>

  .multi-line-truncate {
  display: -webkit-box;
  -webkit-line-clamp: 2;      /* Сколько строк показывать */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5rem;         /* Важно: зафиксировать line-height */
}
</style>