<template>
  <div class="features-screen">
    <h2 class="features-screen__title">
      Почему нужно играть<br>
      на <span class="features-screen__title_marked">ГТА РОССИЯ</span>
    </h2>
    <div class="features-screen__features">
      <Feature
          :image="featureImage1"
          description="Каждый интерьер выполнен эксклюзивно для нашего проекта и отлично оптимизирован. Мы стараемся сохранять баланс между качеством и производительностью, для нас это действительно важно."
      >
        <template #title>
          <span class="features-screen__marked-title">Лучшие</span>
          интерьеры и наружный маппинг
        </template>
      </Feature>
      <Feature
          :image="featureImage2"
          description="На нашем проекте ты не только сможешь приобрести любой автомобиль на свой вкус, но и затюнинговать его просто до неузнаваемости. Тонировка, неоновая подсветка, винилы, цвет фар, размер дисков и даже уровень занижения подвески — все это есть на ГТА РОССИЯ и доступно каждому."
          reversed-order
      >
        <template #title>
          <span class="features-screen__marked-title">Огромный</span>
          выбор авто и тюнинга на любой вкус
        </template>
      </Feature>
      <Feature
          :image="featureImage3"
          description="Опасный бандит, врач, сотрудник ДПС, или быть может просто доставщик пиццы? У нас есть скины под любую роль, каждый из которых выполнен на высочайшем уровне."
      >
        <template #title>
          <span class="features-screen__marked-title">Собственные</span>
          скины на любой вкус и цвет
        </template>
      </Feature>
    </div>
  </div>
</template>

<script setup>
import Feature from "./Feature";

import featureImage1 from '../assets/images/features-images/1.png'
import featureImage2 from '../assets/images/features-images/2.png'
import featureImage3 from '../assets/images/features-images/3.png'
</script>

<style lang="scss" scoped>
.features-screen {
  margin-top: -4vw;

  &__title {
    margin-bottom: 4vw;

    color: white;

    text-align: center;
    font-size: 1.7vw;

    &_marked {
      color: #FF2E2E;
    }
  }

  &__marked-title {
    color: #FF2E2E;
  }

  &__features {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4vw;
  }
}
</style>