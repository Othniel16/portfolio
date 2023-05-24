<template>
  <div class="body">
    <div class="container">
      <h1>SOON COME <span class="period">.</span></h1>
      <img class="image image1" src="@/assets/images/1.png" alt="" />
      <img class="image image2" src="@/assets/images/2.jpg" alt="" />
      <img class="image image3" src="@/assets/images/3.jpg" alt="" />
      <img class="image image4" src="@/assets/images/4.png" alt="" />
      <img class="image image5" src="@/assets/images/5.jpg" alt="" />
      <img
        class="image image6"
        src="https://media.giphy.com/media/tXLpxypfSXvUc/giphy.gif"
        alt=""
      />
    </div>
  </div>
</template>

<style>
.body {
  display: grid;
  place-items: center;
  height: 100vh;
  color: #08124f;
  background-color: #e3fd52;
  overflow: hidden;
}

h1 {
  font-size: clamp(4.5rem, 12vw + 1rem, 12rem);
}

::selection {
  background-color: #08124f;
  color: white;
}

.image {
  height: 150px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.container {
  position: relative;
}

.period {
  color: white;
}

@keyframes imageAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.image1 {
  animation: imageAnimation 0s 1s forwards;
  transform: rotate(0deg) translate(250px, 340px);
}

.image2 {
  animation: imageAnimation 0s 1.5s forwards;
  transform: rotate(-12deg) translate(900px, -150px);
}

.image3 {
  animation: imageAnimation 0s 2s forwards;
  transform: rotate(0deg) translate(700px, 150px);
}

.image4 {
  height: 100px;
  animation: imageAnimation 0s 2.5s forwards;
  transform: rotate(10deg) translate(-380px, -200px);
}

.image5 {
  height: 180px;
  animation: imageAnimation 0s 3s forwards;
  transform: rotate(30deg) translate(-140px, 250px);
}

.image6 {
  animation: imageAnimation 0s 5s forwards;
  transform: rotate(-20deg) translate(300px, -50px);
}

@media (max-width: 600px) {
  h1 {
    font-weight: 300;
  }

  .image1 {
    animation: imageAnimation 0s 1s forwards;
    transform: rotate(30deg) translate(20px, 250px);
  }

  .image2 {
    animation: imageAnimation 0s 1.5s forwards;
    transform: rotate(-12deg) translate(280px, -300px);
  }

  .image3 {
    visibility: hidden;
  }

  .image4 {
    height: 100px;
    animation: imageAnimation 0s 2.5s forwards;
    height: 50px;
    transform: rotate(10deg) translate(-90px, -240px);
  }

  .image5 {
    height: 180px;
    animation: imageAnimation 0s 2s forwards;
    height: 100px;
    transform: rotate(0deg) translate(240px, 220px);
  }

  .image6 {
    height: 100px;
    animation: imageAnimation 0s 3s forwards;
    transform: rotate(-20deg) translate(130px, -70px);
  }
}
</style>
