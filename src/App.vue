<!-- <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"> -->
<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
    crossorigin="anonymous"
  />
  <link rel="stylesheet" href="./font-awesome/css/font-awesome.min.css" />
  <head>
    <title>!DOCTYPE</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">About <span class="sr-only"></span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Price</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <button
            class="btn my-2 my-sm-0"
            style="margin-left: 325px"
            type="submit"
          >
            Contact
          </button>
        </form>
      </div>
    </nav>

    <!-- Верхний блок DANIIL PONOMARENKO  -->
    <div
      style="background-color: white; height: 720px"
      class="container-fluid row"
    >
      <div class="col">
        <div>
          <h1>DANIIL PONOMARENKO</h1>
          <h3>фотограф</h3>
          <div>
            <img
              src="./media/IMG_8975.jpg"
              name="me_photo"
              style="width: 200px; height: auto"
            />
            <img src="" name="its_me" />
            <span>
              <span>портретная съемка</span>
            </span>
          </div>
          <button type="button" class="btn btn-danger">Записаться</button>
        </div>
      </div>
      <div
        class="col d-flex flex-column flex-wrap align-content-end justify-content-center gap-4"
        style="
          background-image: url(./media/IMG_8819.jpg);
          background-size: cover;
          background-position: center;
        "
      >
        <button class="btn btn-outline-light">
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </button>
        <button class="btn btn-outline-light">
          <i class="fa fa-telegram" aria-hidden="true"></i>
        </button>
        <button class="btn btn-outline-light">
          <i class="fa fa-vk" aria-hidden="true"></i>
        </button>
      </div>
    </div>

    <!-- Немного обо мне -->
    <div class="row">
      <div class="col-8" name="Nemnogo_obo_mne">
        <h1 class="text-uppercase">Немного обо мне</h1>
        <div>
          <img src="./media/IMG_8879.jpg" style="width: 120px; height: auto" />
          <span>
            Я - Даниил Пономаренко - фотограф, желающий видеть в фотографях
            нечто большее, чем просто пиксели,передавать чувства и эмоции
            человека, искать его грани, контуры и контрасты.
          </span>
        </div>
        <div>
          <img src="./media/IMG_8814.jpg" style="width: auto; height: 251px" />
          <span>
            Но согласитесь, в первую очередь о фотографе говорят его работы,
            поэтому предлагаю вам погрузиться в мой мир творческой мысли.
          </span>
          <div>
            <div class="position-relative">
              <button class="btn subscribeButton">Подписывайся</button>
              <svg role="Zschmyak"></svg>
            </div>
            <span class="text-muted">
              *канал, где происходит секс с искусством
            </span>
          </div>
        </div>
        <!-- <ul>
        <li>
          Я - Даниил Пономаренко - фотограф, желающий видеть в фотографях нечто большее, чем просто пиксели,передавать чувства и эмоции человека, искать его грани, контуры и контрасты.
        </li>
        <li>
          Но согласитесь, в первую очередь о фотографе говорят его работы,
          поэтому предлагаю вам погрузиться в мой мир творческой мысли.
        </li>
      </ul> -->
      </div>
      <div class="col-4 gap-4 d-flex flex-column" name="image_holder">
        <div class="row">
          <img src="./media/IMG_8790.jpg" style="width: auto; height: 319px" />
        </div>
        <div class="row">
          <img src="./media/IMG_8844.jpg" style="width: auto; height: 185px" />
        </div>
      </div>
    </div>

    <!-- PORTFOLIO: -->
    <div>
      <h1>PORTFOLIO</h1>
      <div>
        <div role="imageHolder">
          <!-- Временное содержимое?  -->
        </div>
        <div role="">
          <li>
            <ul>
              BLACK SVAN
            </ul>
            <ul>
              АРИНА НАЗАРЕНКО
            </ul>
            <ul>
              MARAT ISIN
            </ul>
            <ul>
              Students SPRING
            </ul>
            <ul>
              Концерт Hallowe'en
            </ul>
          </li>
          <div role="Button with tooltip">
            <button>Больше съёмок</button>
            <i role="tooltip '?' "></i>
          </div>
        </div>
      </div>
    </div>
    <!-- PRICE -->
    <div>
      <h1>PRICE</h1>
      <price-widget> </price-widget>
      <div>
        <h1>
          <span class="red-text"> Свяжитесь </span>
          <span>со мной</span>
          <p>и погнали <span class="red-text">творить</span></p>
        </h1>
        <p>
          <!-- Сюда можно прикрутить ссылку при нажатии на которую откроется почта -->
          ponomarenko.photo.art@gmail.com
        </p>
      </div>
      <div>
        <p>
          или заполните<br />
          <span class="red-text">заявку</span> и я свяжусь с вами
        </p>
      </div>
    </div>
    <div role="footer">
      А вот сЮда покинуть Надо футер чтобы глаз не мозолило из начала с
      баттонами также сделать
    </div>
  </body>

  <!--<div class="bg-gray-500 flex flex-col min-h-screen">
    <NewHeader />
    <div
      class="flex-1 flex w-2/3 mx-auto p-4 text-lg bg-white h-full shadow-lg"
    >
      <div class="w-3/5">
        <router-view :key="$route.fullPath" />
      </div>
      <div class="w-2/5">
        <LatestPosts />
      </div>
    </div>
  </div>-->
</template>

<script setup>
import PriceWidget from "./components/PriceWidget.vue";
import "bootstrap/dist/css/bootstrap.css";
</script>
