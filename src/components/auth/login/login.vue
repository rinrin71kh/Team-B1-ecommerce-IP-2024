<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="">
      <label>
        Email:
        <input type="email" v-model="email" required />
      </label>
      <label>
        Password:
        <input type="password" v-model="password" required />
      </label>
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { login } from '@/api/login/login';
import axios from 'axios';
import { Password } from 'primevue';
export default defineComponent({
  name: 'LoginPage',
  data() {
      return {
         email: String,
         password: String,
         errorMessage: String,
      }
   },
  methods: {
    fetchCategories() {
         axios.get('http://localhost:3000/api/groups').then(res => {
            this.currentCategory = res.data;  
            console.log(this.currentCategory);
         })},
         
         handleLogin ()  {
      try {
        
        
      } catch (error) {
      }
    }
  }
});
</script>

<style>
.error {
  color: red;
}
</style>
