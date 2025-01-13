<template>
<h1>Logged out</h1>
</template>
<script>
import router from '@/router';

export default {
  name: 'Logout',
  setup() {
    localStorage.removeItem('authToken');
    router.push('/login');
  },
};
</script>