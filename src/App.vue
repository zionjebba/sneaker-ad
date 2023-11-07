<template>
<div>
  <HeaderComponent :name-props="name"/>
  <div class="mid-section">
    <ImageComponent />
    <DescriptionComponent />
  </div>
  
</div>
</template>

<script setup>
import DescriptionComponent from "./components/DescriptionComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import ImageComponent from "./components/ImageComponent.vue";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { ref } from "vue";

const name = ref("Miss Z");
</script>

<style>
.mid-section {
  display: flex;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  gap: 6em;
  margin-top: 3em;
}

/* * {
  outline: 1px solid;
} */
</style>
