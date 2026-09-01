<template>
<div class="flex flex-col orders-list  flex-1 gap-4" v-auto-animate>
    
    <catitem v-for="item in cart "
  
     :imgUrl="item.imageUrl"
      :key="item.id"
       :price="item.price"
        :title="item.title"
        @onClickRemove="() => removeFromCart(item)"
        
        />
 
</div>
</template>
<script setup>

import { inject } from 'vue';

import catitem from './catitem.vue';

const { cart, removeFromCart } = inject('cart')



</script>

<style>

.orders-list {
max-height: 380px;
overflow-y: auto;
}

</style>