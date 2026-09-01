<template>



    <div @click="() => emit('OpenInfoPanelItem', item)" class="fixed cursor-pointer top-0 left-0 w-full h-full bg-black/50 z-10"></div>

<div class="flex justify-center ">
    <div class="bg-white dark:bg-slate-700 w-96 h-full fixed rounded-xl   top-0 z-20 p-8">
        
        <div class="flex items-center gap-5 mb-4">

  <div @click="() => emit('OpenInfoPanelItem', item)"  class="group cursor-pointer">
  <svg 
    
    width="7" 
    height="12" 
    viewBox="0 0 7 12" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    class="opacity-30 rotate-180 m-2 group-hover:opacity-100 dark:opacity-100 
           dark:stroke-white stroke-gray-800 transition-all duration-200"
  >
    <path 
      d="M1 0.999999L6 6L1 11" 
      stroke="currentColor" 
      stroke-width="1.5" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    />
  </svg>
</div>
</div>



<div class="flex h-full  items-center">
    <div class="flex flex-col   mx-auto w-72  ">
        <img :src="imageUrl" alt="">
        <h2 class="mt-4 text-2xl">{{ title }}</h2>
        <div class="font-medium mt-2" > <span class="text-slate-400">Цена: </span> {{ price }} р.</div>
    </div>
</div>

    </div>
</div>

</template>

<script setup>

const emit = defineEmits(['OpenInfoPanelItem']);


defineProps({

    title: String,
    price: Number,
    imageUrl: String,
    OpenInfoPanelItem: Function,

})


</script>