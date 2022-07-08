<script setup>
import Title from "../title/title.vue";
import MenuLanguage from "../menuLanguage/menuLanguage.vue";

</script>

<template>
  <main class="main">
    <div class="corner-banner top-left desktop">
      <div class="banner banner-orig">
        <div class="banner-item">FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</div>
      </div>
    </div>
    <MenuLanguage />
    <div class="main__logo">
      <RouterLink to="/">
        <img src="../images/Logo.svg" alt="">
      </RouterLink>
    </div>
    <Title />
    <div class="corner-banner bottom-left desktop">
      <div class="banner banner-orig">
        <div class="banner-item">FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</div>
      </div>
    </div>
  </main>
</template>

<style>
@import './main.css';
</style>