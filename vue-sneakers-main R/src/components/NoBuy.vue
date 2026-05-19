<template>

 <div class="flex flex-col justify-center ">
      <div class="flex justify-center">
        <img :src="imgUrl" class="w-16 h-16" alt="">
      </div>
        <Span class="font-bold text-2xl mb-1 text-center" > {{ titleOne }} </Span>
        <Span class="text-center text-gray-400 " >{{ titleTwo }}</Span>
        <span class="text-center text-gray-400 "> {{ titleTree }} </span>
        <RouterLink to="/">
          <ButtonBack />
        </RouterLink>
    </div>

</template>

<script setup>
import ButtonBack from '/src/components/ButtonBack.vue'

    defineProps({

        imgUrl: String,
        titleOne: String,
        titleTwo: String,
        titleTree: String,
       
    })

</script>

