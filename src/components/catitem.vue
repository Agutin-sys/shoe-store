
<template>

<div class="flex items-center border   border-slate-200 p-4 roundet-xl gap-4">

<img :src="imgUrl" class="w-16 h-16" :alt="title">

<div class="flex flex-col ">

    <div class="max-w-[170px] truncate "><p class="truncate">{{ title }}</p></div>

    <div class="flex justify-between mt-2">

      <div class=""><b>{{   price  }} руб.</b></div>

      <div class="flex justify-center">  
        
        <img @click="emit('onClickRemove')" 
        class="
        opacity-50 
        hover:opacity-100 
        cursor-pointer transition 
        " src="/close.svg" alt=""></div>
  

    </div>

</div>

</div>


</template>

<script setup>

const emit = defineEmits(["onClickRemove"])

defineProps({

  imgUrl: String,
  title: String,
  price: Number,
  id : Number,

})

</script>

