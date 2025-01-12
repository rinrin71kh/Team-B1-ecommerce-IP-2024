<template>
  <div>
    <img 
      src="/icon/edit02.svg" 
      @click="showModal = true" 
      class="w-6 h-6 cursor-pointer hover:opacity-80" 
      alt="Edit" 
    />

    <div 
      v-if="showModal" 
      class="fixed inset-0 bg-white md:bg-gray-600 md:bg-opacity-50 overflow-y-auto h-screen w-full z-50 flex items-start justify-center"
      style="margin-left: 0; padding-top: 56px;"
    >
      <div class="relative bg-white w-full md:w-[500px] md:rounded-lg mt-0 md:mt-4">
        <div class="flex items-center justify-between p-4 border-b">
          <h3 class="text-lg">កែប្រែព័ត៌មាន</h3>
        <button 
          @click="showModal = false" 
          class="text-gray-500 bg-transparent hover:bg-gray-200 p-2 rounded-full"
        >
          <span class="text-2xl font-bold">&times;</span>
        </button>
        </div>

        <div class="p-4">
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div class="flex justify-center">
              <div class="relative">
                <img 
                  :src="formData.image" 
                  class="w-24 h-24 rounded-full object-cover"
                  alt="Profile"
                />
                <input 
                  type="file" 
                  ref="fileInput" 
                  @change="handleImageChange" 
                  class="hidden" 
                  accept="image/*"
                />
              </div>
            </div>

            <div class="space-y-3">
              <div>
                <label class="text-gray-500 text-sm">ឈ្មោះ *</label>
                <input 
                  v-model="formData.name"
                  type="text"
                  class="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="ឈ្មោះ"
                />
              </div>

              <div>
                <label class="text-gray-500 text-sm">លេខទូរស័ព្ទ *</label>
                <input 
                  v-model="formData.phone"
                  type="tel"
                  class="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="លេខទូរស័ព្ទ"
                />
              </div>

              <div>
                <label class="text-gray-500 text-sm">អ៊ីមែល *</label>
                <input 
                  v-model="formData.email"
                  type="email"
                  class="w-full p-2 border border-gray-300 rounded mt-1"
                  placeholder="អ៊ីមែល"
                />
              </div>
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
  name: 'EditProfile',
  data() {
    return {
      showModal: false,
      formData: {
        image: '/Signin.jpg',
        name: '',
        phone: '',
        email: ''
      }
    }
  },
  methods: {
    handleImageChange(event) {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.formData.image = e.target.result
        }
        reader.readAsDataURL(file)
      }
    },
    handleSubmit() {
      console.log('Submitting updated profile:', this.formData)
      this.$emit('profile-updated', this.formData)
      this.showModal = false
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

:deep(body.modal-open) {
  overflow: hidden;
}
</style>
