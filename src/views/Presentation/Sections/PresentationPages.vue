<script setup>
import ExampleCard from "../Components/ExampleCard.vue";
import MaterialBadge from "../../../components/MaterialBadge.vue";

// images
import tibar from "@/assets/img/site/tibar.png";
import ticommerce from "@/assets/img/site/ticommerce.png";
import tihotel from "@/assets/img/site/tihotel.png";
import tihotel2 from "@/assets/img/site/tihotel2.png";
import miagroup from "@/assets/img/site/miagroup.png";
import miagroup2 from "@/assets/img/site/miagroup2.png";
import sonzi from "@/assets/img/site/sonzi.png";
import vide from "@/assets/img/site/vide.png";

</script>
<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="row text-center my-sm-5 mt-1">
          <div class="col-lg-6 mx-auto">
            <MaterialBadge color="warning" class="mb-3"
              >Plus de créativité</MaterialBadge
            >
            <h2 class="">Mes pages codées</h2>
            <p class="lead">
              Comprendre les besoins et offrir des solutions créatives.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8">
          <div class="row mt-4">
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                class="shadow-lg"
                title="Tibar"
                :image=tibar
                route="https://tibar.tabis.tg/"
              />
            </div>
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                class="shadow-lg"
                title="Ticommerce"
                :image=ticommerce
                route="https://ticommerce.tabis.tg/"
              />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                class="shadow-lg"
                title="Mia group"
                :image=miagroup
                route="http://mia2012.com/"
              />
            </div>
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                class="shadow-lg"
                title="Mia group"
                :image=miagroup2
                route="http://mia2012.com/"
              />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                classes="mt-5"
                title="Tihotel"
                :image=tihotel
                route="https://tihotel.tabis.tg/"
              />
            </div>
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                classes="shadow-lg"
                title="Tihotel"
                :image=tihotel2
                route="https://tihotel.tabis.tg/"
              />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                classes="mt-5"
                title="Sonzi"
                :image=sonzi
                route="https://sonzi.tg/"
              />
            </div>
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                classes="shadow-lg"
                title="Tak"
                :image=vide
                route="https://tak.tg"
              />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                classes="mt-5"
                title="Etvt"
                :image=vide
                route="https://reservation-etvt.com/"
              />
            </div>
            <div class="col-md-6 mt-md-0 mt-5">
              <ExampleCard
                classes="shadow-lg"
                title="Halassi transport"
                :image=vide
                route="https://halassi-transport.com"
              />
            </div>
          </div>
        </div>
        <div class="col-md-3 mx-auto mt-md-0 mt-3">
          <div class="position-sticky" style="top: 100px !important">
            <h3>
              Pages de présentation pour les entreprises, Landing Pages, Blogs, etc...
            </h3>
            <h6 class="text-secondary font-weight-normal">
              C'est just un petit aperçu de quelques réalisations.
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
