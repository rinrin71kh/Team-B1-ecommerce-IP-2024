<template>
  <div class="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    style="background-image: url('/Signin.jpg');">
    <div class="bg-white shadow-lg p-8 w-[450px] kantumruy-pro-regular">
      <div class="text-left mb-4">
        <span class="focus:outline-none cursor-pointer text-xl">
          ← បង្កើតគណនី
        </span>
      </div>

      <form @submit.prevent="handleLogin">
        <div class="grid grid-cols-2 gap-4 mb-4">
          <input v-model="firstName" type="text" id="firstName" placeholder="នាមខ្លួន"
            class="w-full border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          <input v-model="lastName" value="hello" type="text" id="lastName" placeholder="នាមត្រកូល"
            class="w-full border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <div class="mb-4 relative">
          <input v-model="email" type="email" id="email" placeholder="អ៊ីមែល"
            class="w-full border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          <img src="/icon/Mail.svg" alt="Mail Icon"
            class="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        <div class="mb-4 relative">
          <input v-model="phoneNumber" type="text" id="phone" placeholder="លេខទូរស័ព្ទ"
            class="w-full border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          <img src="/icon/mdi_cellphone.svg" alt="Phone Icon"
            class="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        <div class="mb-4 relative">
          <input v-model="password" type="password" id="password" placeholder="លេខសម្ងាត់"
            class="w-full border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          <img src="/icon/eye.svg" alt="Eye Icon"
            class="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        <div class="mb-4 relative">
          <input v-model="repassword" type="password" id="confirmPassword" placeholder="លេខសម្ងាត់បញ្ជាក់"
            class="w-full border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          <img src="/icon/eye.svg" alt="Eye Icon"
            class="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        <button type="submit" class="w-full bg-blue-500 text-white py-3 text-base hover:bg-blue-600 transition">
          ចុះឈ្មោះ
        </button>

        <div class="flex items-center my-4">
          <div class="flex-grow border-t border-gray-300"></div>
          <span class="px-4 text-base text-gray-500 kantumruy-pro-regular">or</span>
          <div class="flex-grow border-t border-gray-300"></div>
        </div>

        <button type="button"
          class="w-full flex items-center justify-center border border-gray-300 py-3 text-base text-gray-700 hover:bg-gray-100 transition"
          @click.prevent="$router.push('/')">
          ចូល
        </button>
      </form>
      <p v-if="errorMessage">{{ errorMessage }}</p>
      </div>
  </div>
</template>


<script>
import { defineComponent, ref } from 'vue';
import { submitForm } from '@/api/login/register';

export default defineComponent({
  name: 'Login',
  setup() {
    const email = ref('');
    const password = ref('');
    const repassword = ref('');
    const lastName = ref('');
    const firstName = ref('');
    const phoneNumber = ref('');
    const errorMessage = ref('');

    const handleLogin = async () => {
      console.log("email: " + email.value + " password: " + password.value + repassword.value + "lastname: " + lastName.value + "firstname: " + firstName.value + "phone: " + phoneNumber.value);
      errorMessage.value=''
      try {
        if (password.value == repassword.value) {
          const user = await submitForm(email.value, password.value, lastName.value, firstName.value, phoneNumber.value)
        } else {
          errorMessage.value = 'Passwords do not match.';
        }
      } catch (error) {
        errorMessage.value = 'Invalid email or password.';
      }
    };
    return {
      firstName,
      lastName,
      phoneNumber,
      repassword,
      password,
      email,
      password,
      errorMessage,
      handleLogin,
    };
  },
});
</script>