<template>
  <div class="flex flex-row gap-3 container-fluid">
    <!-- v-for="(item,key) in " -->
    <div
      class="d-flex flex-column justify-content-between"
      v-for="(item, index) in data"
      :key="index"
    >
      <div role="image-holder">
        <!-- {{ props.img }} -->
        <img
          style="height: auto; max-width: 350px"
          v-bind:src="require('./' + item.imgPath + '.png')"
        />
      </div>
      <div role="title">
        <h3>{{ item.title }}</h3>
      </div>
      <div role="text">
        <p v-html="item.subTitle"></p>
      </div>
      <div role="price" class="price-text">
        <p>{{ item.price }} ₽.</p>
      </div>
      <div role="button chose" class="w-50 p-2 text-center button-chose">
        <button class="subscribeButton">то, что нужно</button>
      </div>
    </div>
  </div>
  <!-- <price-widget-element
    title=""
    subTitle="
    :price="4000"
    img="@media/marat.png"
  >
  </price-widget-element> -->
</template>

<script setup>
// import PriceWidgetElement from "./PriceWidgetElement.vue";

const data = [
  {
    title: "Вдохновение",
    subTitle:
      "// Этот формат отлично подходит для съёмок в городе и ближайших окрестностях, на случай, если нужно запечатлеть все быстро и со вкусом",
    price: 4000,
    imgPath: "marat",
  },
  {
    title: "Касаясь искусства",
    subTitle:
      "// Это полноценная художественная история о вас с полной подготовкой.<br>Мы заранее определим идею, подберём референсы, места и создадим полное ощущение погружения в вашу задумку.",
    price: 8000,
    imgPath: "art",
  },
  {
    title: "Обнимая искусство",
    subTitle:
      "// Подходит для сложных проектов, требующих долгой подготовки.<br>Так же подойдёт для тех, кто хочет глубже раскрыться в кадре.",
    price: 14000,
    imgPath: "hug",
  },
  {
    title: "Event",
    subTitle:
      "// Съемка концертов, форумов, показов и других творческих мероприятий любого уровня",
    price: "3000/ч",
    imgPath: "event",
  },
];
</script>
<style>
.price-text {
  color: #e50000;
  font-size: 20px;
}
.button-chose {
  color: #e50000;
  border: 1px solid #e50000;
  background-color: #ffffff;
  border-radius: 1px;
  -moz-border-radius: 1px;
  -webkit-border-radius: 1px;
  text-transform: uppercase !important;
}
.button-chose:hover {
  background-color: #e50000;
  color: #ffffff;
  transition: ease-in-out 0.4s;
}
</style>
