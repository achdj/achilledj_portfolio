<script setup>
//images
import me from "@/assets/img/ach/ach.png";
</script>
<template>
  <div class="container mt-sm-5">
    <div
      class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl"
      :style="{
        backgroundImage:
        `url(${me})`
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-5"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 ms-lg-5">
            <h4 class="text-white">La passion des technologies</h4>
            <h1 class="text-white">Une longue histoire d'innovation</h1>
            <p class="lead text-white opacity-8">
              Je travaille comme analyste programmeur depuis plus de cinq ans. 
              Au-delà de mon expertise technique et de mon expérience, j’apporte également une valeur de conseil.
              Je suis enthousiaste à l'idée de contribuer à la croissance des projets en aidant à fournir des services efficaces et innovants.
            </p>
            <a
              href="https://www.linkedin.com/in/achille-djegnon-6a3144153/"
              class="text-white icon-move-right"
            >
              En apprendre plus
              <i class="fas fa-arrow-right text-sm ms-1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
