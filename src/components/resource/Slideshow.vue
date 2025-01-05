<template >
      <div class="w-full px-[100px] max-md:px-4  mx-auto  max-md:my-8">
        <!-- Slideshow Images -->
        <div class="overflow-hidden ">
          <div
            class="flex transition-transform duration-500"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="(image, index) in images"
              :key="index"
              class="flex-none w-full h-72 max-md:h-40"
            >
              <img
                :src="image"
                alt="Slideshow Image"
                class="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
        <!-- Navigation Buttons -->
  
        <!-- <button
          class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
          @click="prevSlide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
          </svg>
        </button>
        <button
          class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
          @click="nextSlide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6l-1.41 1.41L14.17 12l-5.58 5.59L10 18l6-6z" />
          </svg>
        </button> -->
        <!-- Indicator Dots -->

        <div class="flex justify-center mt-4 gap-2">
          <a
            v-for="(image, index) in images"
            :key="index"
            class="rounded-full w-3 h-3 max-md:w-2 max-md:h-2 cursor-pointer"
            :class="index === currentIndex ? 'bg-black' : 'bg-gray-300'"
            @click="goToSlide(index)"
          ></a>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
        images: [
          "/images/banner/banner-1.jpg",
          "/images/banner/banner-2.jpg",
          "/images/banner/banner-3.jpg",
        ],
        intervalId: null,
      };
    },
    mounted() {
      this.startAutoPlay();
    },
    beforeDestroy() {
      this.stopAutoPlay();
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prevSlide() {
        this.currentIndex =
          (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
      goToSlide(index) {
        this.currentIndex = index;
      },
      startAutoPlay() {
        this.intervalId = setInterval(() => {
          this.nextSlide();
        }, 3000); 
      },
      stopAutoPlay() {
        clearInterval(this.intervalId);
      },
    },
  };
  </script>
  
  <style>
  /* Custom styling for slideshow if needed */
  </style>
  