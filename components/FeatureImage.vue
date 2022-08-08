<template>
  <div ref="rootEl" class="feature-image" :class="{ 'feature-image_flipped': flipped }">
    <img ref="imageEl" class="feature-image__bg" src="@/assets/images/feature-image-bg.svg"/>
    <img class="feature-image__image" :src="src"/>
  </div>
</template>

<script setup>
const props = defineProps({
  flipped: Boolean,
  src: String,
})

// const rootEl = ref(null);
// const imageEl = ref(null);
//
// const isHidden = ref(true);

// const elementInView = (dividend = 1) => {
//   const elementTop = rootEl.value.getBoundingClientRect().top;
//
//   return (
//       elementTop <=
//       (window.innerHeight || document.documentElement.clientHeight) / dividend
//   );
// };

// onMounted(() => {
//   window.addEventListener("scroll", () => {
//     if (elementInView(1.25)) {
//       isHidden.value = false;
//     }
//   });
//
//   document.addEventListener("mousemove", (e) => {
//
//   })
// })
</script>

<style lang="scss" scoped>
.feature-image {
  display: flex;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;
  position: relative;

  transition: all 200ms ease-out;

  &_flipped {
    .feature-image__bg {
      transform: scaleX(-1);
    }
  }

  &__bg {
    width: 25vw;
  }

  &__image {
    position: absolute;

    width: 100%;
  }
}
</style>