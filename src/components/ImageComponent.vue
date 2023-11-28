<template>
  <div class="image-component-wrapper">
    <div class="container">
      <div class="main-page row">
        <img class="large-image" :src="currentImage" alt="" />
      </div>
      <div class="row thumbnails">
        <div class="col-3" v-for="thumbnail in thumbnails" :key="thumbnail">
          <img
            :class="currentImage === thumbnail ? 'orange' : ''"
            class="thumbnail col"
            :src="thumbnail"
            alt=""
            @click="setImage(thumbnail)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import image1 from "../assets/image-product-1.jpg";
import image2 from "../assets/image-product-1.jpg";
import image3 from "../assets/image-product-2.jpg";
import image4 from "../assets/image-product-3.jpg";
import image5 from "../assets/image-product-4.jpg";

let currentImage = ref(image1);

const setImage = (imageUrl) => {
  currentImage.value = imageUrl;
};

const thumbnails = [image2, image3, image4, image5];



</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}


.large-image {
  margin-bottom: 50px;
  border-radius: 30px;
}

.row img {
  cursor: pointer;
}

.thumbnail {
  width: 100%;
  border-radius: 10px;
  /* transform: scale(.8); */
  margin: 10px;
}

.image-component-wrapper {
  /* transform: scale(.3); */
  width: 25em;
  height: auto;
}

.thumbnail:hover {
  transform: scale(1.4);
  border: 3px solid orange;

}

.orange {
  border: 3px solid orange;
}


</style>
