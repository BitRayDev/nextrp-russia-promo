<template>
  <div class="feature" :class="{ 'feature_reversed': reversedOrder }">
    <FeatureImage class="feature__image" :flipped="reversedOrder" :src="image"/>
    <div class="feature__text">
      <h2 class="feature__title">
        <slot name="title">
          {{ title }}
        </slot>
      </h2>
      <p class="feature__description">
        <slot name="description">
          {{ description }}
        </slot>
      </p>
    </div>
  </div>
</template>

<script setup>
import FeatureImage from "./FeatureImage";

const props = defineProps({
  reversedOrder: Boolean,
  title: String,
  description: String,
  image: String,
})
</script>

<style lang="scss">
.feature {
  display: flex;
  align-items: center;
  gap: 4vw;

  &_reversed {
    flex-direction: row-reverse;
  }

  &__image {

  }

  &__text {
    display: flex;
    flex-shrink: 1;
    flex-direction: column;
    gap: 1vw;

    width: 25vw;
  }
  &__title {
    color: white;
    font-size: 1.3vw;
  }

  &__description {
    color: white;
    font-size: .9vw;
    font-weight: 400;
  }
}
</style>