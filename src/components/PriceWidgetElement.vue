<template>
  <div role="content-holder">
    <div role="image-holder">
      <!-- {{ props.img }} -->
      <img :src="props.img" />
    </div>
    <div role="title">
      <h3>{{ props.title }}</h3>
    </div>
    <div role="text">
      <p>{{ props.subTitle }}</p>
    </div>
    <div role="price">
      <p>{{ props.price }}</p>
    </div>
  </div>
  <div role="button chose">
    <button class="subscribeButton">то, что нужно</button>
  </div>
</template>

<script lang="js" setup>
  import {  defineProps } from 'vue';
  const props = defineProps({
  title: String,
  subTitle: String,
  price: Number,
  img: String
})
</script>
