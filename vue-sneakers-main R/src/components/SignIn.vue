

<template>
  <div class="flex flex-col items-center justify-center min-h-screen dark:bg-slate-800 bg-gray-50 px-4">
    <div class="w-full max-w-md">
    
      <h2 class="text-2xl dark:text-white font-semibold text-gray-800 mb-8 text-center">Войти</h2>

  
      <form @submit.prevent="login" class="space-y-6">
     
        <div class="relative">
          <input
            v-model="username"
            type="text"
            placeholder="Логин или email"
            class="block w-full px-4 pt-2 pb-1 text-gray-700  dark:text-white bg-transparent border-b-2 border-gray-300 
                    focus:border-blue-500 focus:outline-none focus:ring-0 transition-colors duration-200"
            required
          />
        </div>

        
        <div class="relative">
          <input
            v-model="password"
            type="password"
            placeholder="Пароль"
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
          Войти
        </button>
         <button
      
          @click="pamp()"
          class="w-full py-3 px-4 bg-blue-600 text-white font-medium 
                 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 
                 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Регистрация
        </button>
      </form>

      <!-- Ссылка "Забыли пароль?" -->
      <!-- <div class="mt-4 text-center">
        <a href="#" class="text-sm text-blue-600 hover:underline">Забыли пароль?</a>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router';
import axios from 'axios'

const username = ref('')
const password = ref('')

const SignInPerson = inject('SignInPerson')
const router = useRouter();

const pamp = async () => {
  await router.push('/Registrat')
}

const login = async () => {

    if (!username.value || !password.value) {
      alert('Пожалуйста, заполните все поля')
    return
  }

 try {
  //  const { data: users } = await axios.get('')

   const { data: users } = [{"username":"register999@gmail.com","password":"7567551","id":1},{"username":"regi654ster999@gmail.com","password":"7567551","id":2},{"username":"regi655675676754ster999@gmail.com","password":"7567567","id":3}]
  
   const user = users.some(user => user.username === username.value && user.password === password.value)
    
   if(user){
    const userEmail = user.email || username.value;

    SignInPerson.value = userEmail;
    localStorage.setItem('userEmail', userEmail);
    
    await router.push('/Profile');

    

    }else{
      alert('вы не вошли')
  }

 }catch(e){
    console.log(e);
 }

}



</script>








