<template>

<div class="flex items-center gap-5 mb-4">

  <div @click="() => closerDrawer()"  class="group cursor-pointer">
  <svg 
    
    width="7" 
    height="12" 
    viewBox="0 0 7 12" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    class="opacity-30 rotate-180 m-2 group-hover:opacity-100 dark:opacity-100 
           dark:stroke-white stroke-gray-800 transition-all duration-200 "
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

   <h2 class="font-bold text-2xl">Корзина</h2>
    </div>

   


</template>

<script setup>
import { inject } from 'vue';


const {closerDrawer} = inject('cart');

</script>
