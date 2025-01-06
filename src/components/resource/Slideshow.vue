<template>
  <div class=" px-[100px] py-6  max-md:px-4 max-md:hidden max-lg:px-8">
    <v-carousel height="300" show-arrows="hover" cycle hide-delimiter-background>
    <v-carousel-item v-for="(image, index) in images" :key="index">
      <v-sheet height="100%">
        <div class="d-flex fill-height justify-center align-center">
          <img :src="image" alt="Slideshow Image" class="w-full h-full object-cover" />
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  </div>

  <div class=" px-[100px] py-6  max-md:px-4 max-md:flex hidden max-lg:px-8">
    <v-carousel height="180" show-arrows="hover" cycle hide-delimiter-background>
    <v-carousel-item v-for="(image, index) in images" :key="index">
      <v-sheet height="100%">
        <div class="d-flex fill-height justify-center align-center">
          <img :src="image" alt="Slideshow Image" class="w-full h-full object-cover" />
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
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

<style scoped>
/* Custom styling for slideshow if needed */
</style>