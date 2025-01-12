<template>
  <div class="flex-1 ml-[280px] ">
    <div class="mt-[30px] p-6">
      <div class="flex justify-between items-center px-6 py-4">
        <div class="flex items-center space-x-2 text-gray-black">
          <router-link to="/admin" class="hover:text-gray-800">
            <img src="/icon/home.svg" class="w-7 h-7" alt="Home" />
          </router-link>
          <span>គណនី</span>
        </div>
        <div class="flex items-center space-x-2">
            <EditPassword @password-updated="handlePasswordUpdate" />
            <EditProfile @profile-updated="handleProfileUpdate" />
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200">
        <div class="flex flex-col items-center md:items-start lg:flex-row lg:items-center lg:space-x-6">
          <img 
            :src="profile.image" 
            alt="Profile" 
            class="w-24 h-24 rounded-full object-cover mb-4 lg:mb-0"
          />
          <div class="text-center lg:text-left flex-1">
            <h2 class="text-xl font-semibold mb-3">{{ profile.name }}</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="flex items-center justify-center lg:justify-start">
                <img src="/icon/smartphone.svg" class="w-6 h-6 mr-0" alt="Phone" />
                {{ profile.phone }}
              </div>
              <div class="flex items-center justify-center lg:justify-start">
                <img src="/icon/email.svg" class="w-6 h-6 mr-0" alt="Email" />
                {{ profile.email }}
              </div>
              <div class="flex items-center justify-center lg:justify-start">
                <img src="/icon/date.svg" class="w-6 h-6 mr-0" alt="Date" />
                {{ profile.joinDate }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <h3 class="text-lg font-semibold mb-4">ចូលប្រព័ន្ធ</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full table-auto">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-m font-medium text-gray-600">ល.រ</th>
                <th class="px-4 py-3 text-left text-m font-medium text-gray-600">ឧបករណ៍</th>
                <th class="px-4 py-3 text-left text-m font-medium text-gray-600">IP Address</th>
                <th class="px-4 py-3 text-left text-m font-medium text-gray-600">កាលបរិច្ឆេទ</th>
                <th class="px-4 py-3 text-left text-m font-medium text-gray-600">ម៉ោង</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="(login, index) in loginHistory" 
                  :key="index"
                  class="hover:bg-gray-50"
              >
                <td class="px-5 py-3 text-sm">{{ index + 1 }}</td>
                <td class="px-4 py-3 text-sm">
                  <img v-if="login.isPC" 
                       src="/icon/pc.svg" 
                       class="w-7 h-7" 
                       alt="PC Login" />
                  <img v-else 
                       src="/icon/smartphone.svg" 
                       class="w-6 h-6" 
                       alt="Phone Login" />
                </td>
                <td class="px-4 py-3 text-sm">{{ login.ipAddress }}</td>
                <td class="px-4 py-3 text-sm">{{ login.date }}</td>
                <td class="px-4 py-3 text-sm">{{ login.time }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditProfile from '@/components/Admin/5.account/editProfile.vue'; 
import EditPassword from '@/components/Admin/5.account/editPassword.vue'

export default {
  name: 'UserLoginInfo',
  components: {
    EditProfile,
    EditPassword
  },
  data() {
    return {
      profile: {
        image: '/Signin.jpg',
        name: 'សិទ្',
        phone: '099 999 999',
        email: 'seth168@gmail.com',
        joinDate: 'Jan 14, 2024'
      },
      loginHistory: [
        { isPC: true, ipAddress: '203.95.197.133', date: '12-12-2024', time: '09:12 AM' },
        { isPC: false, ipAddress: "203.95.197.133", date: "12-12-2024", time: "11:12 AM" },
        { isPC: true, ipAddress: "203.95.197.133", date: "11-12-2024", time: "10:12 PM" },
        { isPC: false, ipAddress: "203.95.197.133", date: "11-12-2024", time: "03:12 AM" },
      ]
    }
  },
  methods: {
    handleProfileUpdate(updatedProfile) {
      this.profile = {
        ...this.profile,
        image: updatedProfile.image,
        name: updatedProfile.name,
        phone: updatedProfile.phone,
        email: updatedProfile.email
      }
    },
    handlePasswordUpdate() {
      console.log('Password updated successfully')
    }
  }
}
</script>
