

<template>
  <div class="flex flex-col items-center justify-center min-h-screen dark:bg-slate-800 bg-gray-50 px-4">
    <div class="w-full max-w-md">

      <h2 class="text-2xl dark:text-white font-semibold text-gray-800 mb-8 text-center">Регистрация</h2>

 
      <form @submit.prevent="login" class="space-y-6">

        <div class="relative">
         
          <input
            v-model="username"
            type="text"
            placeholder="Логин или email"
            class="block w-full px-4 pt-2  text-gray-700 dark:text-white bg-transparent border-b-2 border-gray-300 
                    focus:border-blue-500 focus:outline-none focus:ring-0 transition-colors duration-200"
            required
          />
        </div>


        <div class="relative">
     
          <input
            v-model="password"
            type="password"
            placeholder="Пароль"
            class="block w-full px-4  pt-2 mb-5 text-gray-700  dark:text-white bg-transparent border-b-2 border-gray-300 
                    focus:border-blue-500 focus:outline-none focus:ring-0 transition-colors duration-200"
            required
          />
          <input
            v-model="passwordTwo"
            type="password"
            placeholder="Повторите пароль"
            class="block w-full px-4 pt-2 pb-1 text-gray-700  dark:text-white bg-transparent border-b-2 border-gray-300 
                    focus:border-blue-500 focus:outline-none focus:ring-0 transition-colors duration-200"
            required
          />
        </div>


        <button
          type="submit"
          
          class="w-full py-3 px-4 bg-blue-600 text-white font-medium 
                 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 
                 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Регистрация
        </button>

        <div class="flex justify-center" v-if="passwordMismatch">
          <div class="text-red-400">Пароли должны совпадать</div>
        </div>

       



      </form>

    
      <!-- Ссылка "Забыли пароль?" -->
      <!-- <div class="mt-4 text-center">
        <a href="#" class="text-sm text-blue-600 hover:underline">Забыли пароль?</a>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'

const username = ref('')
const password = ref('')
const passwordTwo = ref('')

const passwordMismatch = computed(() => {
  if (!passwordTwo.value) return false 
  return password.value !== passwordTwo.value
})



const login = async () => {
 try {
     if (!username.value || !password.value) {
    alert('Пожалуйста, заполните все поля')
    return
  }

  //  const { data } = await axios.get('')

   const { data } = [{"username":"register999@gmail.com","password":"7567551","id":1},{"username":"regi654ster999@gmail.com","password":"7567551","id":2},{"username":"regi655675676754ster999@gmail.com","password":"7567567","id":3}]
  
    if(data.some(user => user.username === username.value)){
    alert('Эта почта уже занята')
    }else{

 alert(`Добро пожаловать, ${username.value}!`)

 const obj = {
    username:  username.value,
    password: password.value,
 }

    await axios.post('', 
    obj
    )

  }

    

 }catch(e){
    console.log(e);
 }

}
</script>








