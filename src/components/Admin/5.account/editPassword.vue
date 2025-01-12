<template>
  <div>
    <img 
      src="/icon/lock.svg" 
      @click="showModal = true" 
      class="w-7 h-7 cursor-pointer hover:opacity-80" 
      alt="Change Password" 
    />

    <div 
      v-if="showModal" 
      class="fixed inset-0 bg-white md:bg-gray-600 md:bg-opacity-50 overflow-y-auto h-screen w-full z-50 flex items-start justify-center"
      style="margin-left: 0; padding-top: 56px;"
    >
      <div class="relative bg-white w-full md:w-[500px] md:rounded-lg mt-0 md:mt-4">
        <div class="flex items-center justify-between p-4 border-b">
          <h3 class="text-lg">ប្តូរលេខសម្ងាត់</h3>
          <button 
            @click="showModal = false" 
            class="text-gray-500 bg-transparent hover:bg-gray-200 p-2 rounded-full"
          >
            <span class="text-2xl font-bold">&times;</span>
          </button>
        </div>

        <div class="p-4">
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label class="text-gray-500 text-sm">លេខសម្ងាត់បច្ចុប្បន្ន *</label>
              <input 
                v-model="formData.currentPassword"
                type="password"
                class="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="លេខសម្ងាត់បច្ចុប្បន្ន"
              />
            </div>

            <div>
              <label class="text-gray-500 text-sm">លេខសម្ងាត់ថ្មី *</label>
              <input 
                v-model="formData.newPassword"
                type="password"
                class="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="លេខសម្ងាត់ថ្មី"
              />
            </div>

            <div>
              <label class="text-gray-500 text-sm">បញ្ជាក់លេខសម្ងាត់ថ្មី *</label>
              <input 
                v-model="formData.confirmPassword"
                type="password"
                class="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="បញ្ជាក់លេខសម្ងាត់ថ្មី"
              />
            </div>

            <div class="pt-4">
              <button 
                type="submit"
                class="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900"
              >
              រួចរាល់
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditPassword',
  data() {
    return {
      showModal: false,
      formData: {
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      if (this.formData.newPassword !== this.formData.confirmPassword) {
        alert('New passwords do not match')
        return
      }
      console.log('Submitting password change:', this.formData)
      this.$emit('password-updated')
      this.showModal = false
      this.formData = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.showModal) {
        this.showModal = false
      }
    })
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleEscape)
  }
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>
