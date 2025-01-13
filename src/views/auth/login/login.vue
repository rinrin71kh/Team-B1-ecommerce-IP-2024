<template>
  <div
    class="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    style="background-image: url('/images/Signin.jpg');"
  >
    <div class="bg-white shadow-lg  p-8 w-[400px]">
      <div class=" flex  text-center items-center justify-center mb-4">
        <img
          src="/images/logo.png"
          alt="GIC Logo"
          class="h-36 w-auto "
        />
      </div>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          
          <div class="relative mt-1">
            <input
              v-model="email"
              type="email"
              id="email"
              placeholder="Email"
              class="w-full border border-gray-300  px-3 py-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <img 
              src="/icon/Mail.svg" 
              alt="Mail Icon" 
              class="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            />
          </div>
        </div>

        <div class="mb-4">
         
          <div class="relative mt-1">
            <input
              v-model="password"
              type="password"
              id="password"
              placeholder="Password"
              class="w-full border border-gray-300  px-3 py-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <img 
              src="/icon/eye.svg" 
              alt="Mail Icon" 
              class="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            />
          </div>
        </div>
        <p v-if="errorMessage" class="text-red-500 mb-3">{{ errorMessage }}</p>
        <span v-if="loading" class="spinner"></span>
        <!-- Should use vue-spinners but error with install npm -->
        {{ loading ? 'Logging in...' : '' }}
        <button
          type="submit"
          class="w-full bg-blue-500 text-white  py-3  hover:bg-blue-600 transition"
        >
          Login
        </button>

        <div class="flex items-center my-4">
          <div class="flex-grow border-t border-gray-300"></div>
          <span class="px-3 text-sm text-gray-500 kantumruy-pro-regular">បង្កើតគណនី</span>
          <div class="flex-grow border-t border-gray-300"></div>
        </div>


        <button
          type="button"
          class="w-full flex items-center justify-center border border-gray-300  py-2 text-gray-700 hover:bg-gray-100 transition mb-5"
        >
          <img src="/icon/google.svg"> 
          <span class="ml-[10px] kantumruy-pro-regular mr-[4px]">
            ភ្ជាប់ជាមួយ 
          </span>
          <span class="font-bold">Google</span>
        </button>

        <button
          type="button"
          class="w-full flex items-center justify-center border border-gray-300  py-2 text-gray-700 hover:bg-gray-100 transition mb-5"
        >
          <img src="/icon/facebook.svg"> 
          <span class="ml-[10px] kantumruy-pro-regular mr-[4px]">
            ភ្ជាប់ជាមួយ 
          </span>
          <span class="font-bold">facebook</span>
        </button>
        <button
          type="button"
          class="w-full flex items-center justify-center border border-gray-300 py-2 mt-3 text-gray-700 hover:bg-gray-100 transition"
          @click.prevent="$router.push('/register')"
        >
          Register
        </button>
  
      
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { isLogin } from '@/api/login/login';
import router from '@/router';

export default defineComponent({
  name: 'Login',
  setup() {
    const email = ref('');
    const password = ref('');
    const errorMessage = ref(null);
    const userData = ref(null);
    const loading = ref(false);

    const handleLogin = async () => {
      loading.value = true;
      try {        
        errorMessage.value = ''
        const user = await isLogin(email.value,password.value);       
        if(user){
          localStorage.setItem('authToken', email.value);          
          router.push('/');
        }else{
          errorMessage.value = 'Unknown email or password';
        }
      } catch (error) {
        errorMessage.value = 'Invalid credentials';
      } finally{
        loading.value = false;
      }
    };
    return {
      email,
      password,
      errorMessage,
      userData,
      loading,
      handleLogin,
    };
  },
});
</script>
