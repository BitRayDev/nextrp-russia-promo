<template>
  <div class="main-screen">
    <h1 class="main-screen__title">
      Играй в Россию<br>
      на своем ПК на проекте<br>
      <span class="main-screen__title_marked">ГТА РОССИЯ</span>
    </h1>
    <p class="main-screen__subtitle">
      Мечтаешь сыграть в ГТА на своем ПК?
      Это возможно на нашем проекте: полная карта, продуманный
      игровой мод, уникальный модпак с русскими и зарубежными
      авто, и многое другое ждет тебя на нашем проекте.
    </p>
    <div class="main-screen__buttons">
      <a href="https://launcher-static.gamecluster.nextrp.ru/nextrp.exe" download>
        <button class="button button_primary">НАЧАТЬ ИГРАТЬ</button>
      </a>
      <!--      <button class="button button_secondary">СМОТРЕТЬ ПРОМО</button>-->
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.main-screen {
  height: 100vh;

  box-sizing: border-box;
  padding: 10vw 15vw;

  background-image: url("../assets/images/main-screen-bg.png");
  background-size: cover;
  background-position: bottom center;

  &__title {
    color: white;

    font-size: 2vw;
    font-weight: bold;

    &_marked {
      color: #FF2E2E;
    }
  }

  &__subtitle {
    width: 35vw;
    margin-top: 1vw;
    margin-bottom: 2vw;

    color: white;

    font-size: .9vw;
    font-weight: 400;
  }

  &__buttons {
    display: flex;
    gap: 1vw;
  }
}

.button {
  padding: 1vw 1.5vw;

  font-size: .9vw;

  appearance: none;
  border: none;
  outline: none;

  cursor: pointer;

  transition: all 200ms ease-out;


  &_primary {
    background: linear-gradient(180deg, #FF2E2E 0%, #821E08 100%, #810C0C 100%);

    color: white;

    &:hover {
      box-shadow: 0 0 1vw #FF2E2E88;
    }
  }

  &_secondary {
    background: #260F0A;

    color: #E61C1C;

    &:hover {
      box-shadow: 0 0 1vw #FF2E2E30;
    }
  }
}
</style>