<template>
  <div class="header">
    <div class="header-text">
    <div class="nav">
      <h1>sneakers</h1>
    </div>

    <div class="list" >
      <ul  v-for="word in list" :key="word">
        <li><a class="link" href="#">{{ word }}</a></li>
      </ul>
    </div>
    </div>

    

    <div class="images">
      <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
          fill="#69707D"
          fill-rule="nonzero"
        />
      </svg>
      <img class="header-img" src="../assets/image-avatar.png" alt="" />
      <!-- <span>Welcome {{ nameProps }}</span> -->
      
      <div class="sale-number">
      <p id="number">{{ productState.purchased }}</p>
    </div>
    </div>
  </div>
  <!-- <hr style="width: 90px"> -->
</template>

<script setup>
import { defineProps } from 'vue';
import { useStore } from '../productStore';

const productState = useStore();

const list = [
  'Collections', 'Men', 'Women', 'About', 'Contact'
];

defineProps({
  nameProps: String,
})




</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,700&family=Kumbh+Sans:wght@700&family=Montserrat:wght@200;300&family=Poppins:ital,wght@1,700&family=Space+Grotesk:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,700&family=Kumbh+Sans:wght@400;700&family=Montserrat:wght@200;300&family=Poppins:ital,wght@1,700&family=Space+Grotesk:wght@500&display=swap");


.header {
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: 20px auto 70px auto;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
  padding-bottom: 20px;
}

.list {
  display: flex;
  align-items: center;
  justify-content: center;
}

li {
  list-style: none;
  color: red;
  font-size: 14px;
  width: fit-content;
}

.sale-number{
  width: 20px;
  height: 20px;
  border: 3px solid rgb(167, 119, 31);
  background: rgb(247, 163, 9);
  color: white;
  border-radius: 250px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  font-family: sans-serif;
  font-size: 12px;
  position: absolute;
  top: 20px;
  margin-left: -19px;
  
}

.number{
  
}


li:hover{
  transform: scale(1.1);
}

.header-text {
  display: flex;
  
}

.header-img {
  width: 3em;
  height: 3em;
  margin-left: 1em;
}

ul {
    margin-top: 0 !important; 
    margin-bottom: 0 !important;
}

.link {
  color: grey;
  text-decoration: none ;
}

a:hover{
  color: black
}

.images{
  /* margin-left: 30%; */
}

.nav h1{
  font-size: 28px;
}

@media screen and (max-width: 800px) {

    .header{
      /* width: 40% */
    }
}
</style>
