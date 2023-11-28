<template>
  <div class="description-component">
    <div class="title"><p>SNEAKER COMPANY</p></div>
    <div class="product">
      <h1>Fall Limited Edition <br />Sneakers</h1>
    </div>
    <div class="description">
      <p>
        These low-profile sneakers are your perfect casual wear <br />
        companion. Featuring a durable rubber sole, they'll <br />
        withstand everything the weather can offer
      </p>
    </div>

    <div class="money">
      <p>$125.00</p>

      <div class="box">
        <p>50%</p>
      </div>
    </div>

    <p id="cancelled">$250.00</p>

    <div class="buttons">
      <div class="counter">
        <button @click="decrement()" style="color: orange; font-weight: 900">
          -
        </button>
        <span style="margin-top: 8px; font-size: 13px; font-weight: bolder">{{
          count
        }}</span>
        <button @click="increment" style="color: orange; font-weight: 900">
          +
        </button>
      </div>

      <button
        class="button"
        :class="{ 'button-clicked': purchased }"
        @click="togglePurchased"
      >
        <span style="margin-top: 5px">
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fill-rule="nonzero"
            />
          </svg>
        </span>
        <span v-if="purchased" style="margin-top: 7px"> Remove </span>
        <span v-else style="margin-top: 7px"> Add to cart </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "../productStore";

const productState = useStore();

let count = ref(0);
let purchased = ref(false);

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};

function togglePurchased() {
  purchased.value = !purchased.value;
  productState.purchased = 1;

  if (purchased.value) {
    productState.purchased = 1;
  } else {
    productState.purchased = 0;
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,700&family=Kumbh+Sans:wght@700&family=Montserrat:wght@200;300&family=Poppins:ital,wght@1,700&family=Space+Grotesk:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,700&family=Kumbh+Sans:wght@400;700&family=Montserrat:wght@200;300&family=Poppins:ital,wght@1,700&family=Space+Grotesk:wght@500&display=swap");

* {
  padding: 0;
  margin: 0;
  font-family: "Kumbh Sans", sans-serif;
}
.main {
  /* width: 50%;
  margin-top: 6%;
  margin-left: 55%; */
}

.title {
  color: orange;
  font-size: 12px;
  margin-bottom: 13px;
  font-weight: bold;
}

.product {
  font-size: 15px;
  margin-bottom: 20px;
}

.description {
  font-size: 12px;
  color: grey;
  margin-bottom: 25px;
}

.money {
  font-weight: 700;
  margin-bottom: 19px;
  font-size: 19px;
  display: flex;
  gap: 10px;
  width: 100px;
}

.discount {
  font-size: 12px;
  padding: auto;
  border-radius: 5px;
  background: rgb(187, 186, 185);
  width: 2em;
}

#cancelled {
  font-size: 10px;
  text-decoration: line-through;
  color: grey;
  margin-top: -20px;
  margin-bottom: 10px;
}

.buttons {
  display: flex;
  gap: 10px;
}
.button {
  background: orange;
  color: white;
  width: 180px;
  height: 30px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
}

.button-clicked {
  background: rgb(235, 101, 12);
  color: white;
  width: 180px;
  height: 30px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
}

svg {
  transform: scale(0.7);
}

.box {
  background: rgb(231, 215, 184);
  width: 50px;
  height: 20px;
  border-radius: 5px;

  font-size: 13px;
}

.counter {
  display: flex;
  justify-content: center;
  width: 100px;
  background: #e3e3e3;
  gap: 25px;
  padding: auto;
  border-radius: 5px;
  height: 30px;
}
.counter button {
  border: none;
  background: none;
  font-size: 19px;
}

.description-component {
  /* align-self: flex-end; */
  margin-top: 3em;
}
</style>
