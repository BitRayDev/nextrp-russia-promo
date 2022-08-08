<template>
  <div class="gallery-screen">
    <h2 class="gallery-screen__title">
      Посмотри сам <br> на
      <span class="gallery-screen__title_marked">все что у нас есть</span>
    </h2>
    <div class="gallery-screen__gallery">
      <video class="gallery-screen__video" src="@/assets/videos/promo.mp4" muted autoplay loop/>
      <img class="gallery-screen__image" v-for="image in images" :src="image"/>
    </div>
  </div>
</template>

<script setup>
import image1 from '@/assets/images/gallery/1.png';
import image2 from '@/assets/images/gallery/2.png';
import image3 from '@/assets/images/gallery/3.png';
import image4 from '@/assets/images/gallery/4.png';
import image5 from '@/assets/images/gallery/5.png';
import image6 from '@/assets/images/gallery/6.png';
import image7 from '@/assets/images/gallery/7.png';
import image8 from '@/assets/images/gallery/8.png';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8
]
</script>

<style lang="scss">
.gallery-screen {
  padding: 8vw 0;

  &__title {
    margin-bottom: 2vw;

    color: white;

    text-align: center;
    font-size: 1.7vw;

    &_marked {
      color: #FF2E2E;
    }
  }

  &__video {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 3;

    width: 100%;
    aspect-ratio: 16/9;
  }

  &__gallery {
    display: grid;
    justify-content: center;
    gap: .5vw;
    grid-template-columns: repeat(4, 12vw);
  }

  &__image {
    width: 100%;
    aspect-ratio: 16/9;
  }
}
</style>