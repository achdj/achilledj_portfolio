<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="warning"
                title="Projets accomplis"
                description="De niveau « performant » sont dirigés par moi de la conception, à la réalisation puis à la maintenance évolutive."
                :count="20"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="warning"
                title="Expérience"
                description="Doté d'une grande flexibilité, j'apprends vite et m'adapte facilement aux besoins de mon environnement et des projets."
                :count="5"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="warning"
                title="Références"
                description="Ces entreprises peuvent attester de mes compétences en programmation et en gestion, ainsi que de ma capacité à atteindre et dépasser les objectifs."
                :count="5"
                suffix="+"
                :duration="3000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
