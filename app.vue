<template>
  <div class="landing">
    <MainScreen/>
    <FeaturesScreen/>
    <GalleryScreen/>
  </div>
</template>

<script setup>
import MainScreen from "./components/MainScreen";
import FeaturesScreen from "./components/FeaturesScreen";
import GalleryScreen from "./components/GalleryScreen";

</script>

<style lang="scss">
@import "assets/fonts/montserrat/stylesheet.css";
* {
  margin: 0;
  padding: 0;

  font-family: 'Montserrat';
}

.landing {
  background-image: url("@/assets/images/bg.png");
  background-size: cover;
}
</style>
