<script setup>
import DefaultReviewCard from "@/examples/cards/reviewCards/DefaultReviewCard.vue";
</script>
<template>
  <section class="py-7" id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto text-center">
          <h2 class="mb-0">Essayer, approuver</h2>
          <h2 class="text-gradient text-warning mb-3">
            Mes services et solutions proposés
          </h2>
          <p class="lead">
            Durant tout son parcours Achille DJEGNON a eu des retours positifs et les avis de tous ceux avec qui il a collaboré afin de s'améliorer continuellement.
          </p>
        </div>
      </div>
      <div class="row mt-6">
        <DefaultReviewCard
          color="bg-gradient-dark"
          name="Création"
          review='"Je construis votre projet en matière de site web et application web & mobile très flexible avec une inspiration basée sur vos goûts."'
          :rating="4.0"
        />
        <DefaultReviewCard
          class="ms-md-auto"
          color="bg-gradient-warning"
          name="Accompagnement"
          review="Ayant une expérience avérée, j'offre une expertise approfondie en matière de développement mobile et web, ainsi que des conseils stratégiques
          tout a long de vos projets informatiques afin d'atteindre vos objectifs de croissance !!!"
          :rating="5.0"
        />

        <DefaultReviewCard
          color="bg-gradient-dark"
          name="Formation"
          review='"Une transmission excellente, une présence efficace avec les participants aux missions pédagogiques sur différents sujet et technologie."'
          :rating="4.0"
        />
      </div>
      <hr class="horizontal dark my-5" />
    </div>
  </section>
</template>
