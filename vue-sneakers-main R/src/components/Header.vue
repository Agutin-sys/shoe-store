<script setup>
import { inject, ref , onMounted } from 'vue';
const SignInPerson = inject('SignInPerson', 'профиль')


const amit =  defineEmits([
  'openDrawer'
])


defineProps({

  totalPrice: Number

})






const isDark = ref(true);

// При монтировании — проверяем сохранённый режим
onMounted(() => {
  if (localStorage.getItem('darkMode') === 'true') {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})

// Переключение темы
const toggleDarkMode = () => {
  isDark.value = !isDark.value

  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('darkMode', 'true')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('darkMode', 'false')
  }
}






</script>

<template>

    <header class="flex justify-between border-b border-slate-200 px-10 py-8">

      <RouterLink to="/">
        <div class="flex items-center gap-4" >
         <img src="/logo.png" class="w-10" alt="logo">
      <div class="hidden lg:block  sm:block md:hidden ">
        <h2 class="text-xl font-bold uppercase">Vue snikers</h2>
        <p class="text-slate-500 ">Магаз лучших кросовок</p>
        </div>
      </div>
      
    </RouterLink>
      <ul class="flex items-center gap-5 lg:gap-10  ">
        <li @click="() => amit('openDrawer')" class="flex items-center cursor-pointer  gap-3 text-gray-500 hover:text-black ">
          <img src="/cart.svg" alt="">
          <b class="hidden lg:block  sm:block md:hidden">{{ totalPrice }} руб.</b>
        </li>

       <RouterLink to="/favorites">
         <li class="flex items-center cursor-pointer gap-3 text-gray-500 hover:text-black">
          <img src="/heart.svg" alt="">
          <b class="hidden lg:block  sm:block md:hidden">Закладки</b>
        </li>
       </RouterLink>
       
         <RouterLink :to="SignInPerson ? '/Profile' : '/signin'">
          <li class="flex items-center  cursor-pointer gap-3 text-gray-500 hover:text-black">
          <img src="/profile.svg" alt="">
          <span class="hidden lg:block  md:hidden">{{ SignInPerson || 'Войти' }}</span>
        </li>
        </RouterLink>

        
    <!-- Кнопка переключения -->
    <button
      @click="toggleDarkMode"
      class="flex items-center  transition">
      <div class="w-5 h-5 flex items-center justify-center">
        <i v-if="!isDark" class="text-xl ">☽</i>
        <i v-else class="text-xl  ">☀︎</i>
      </div>
    </button>
      </ul>
    </header>
</template>