<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";
import HorizontalTeamCard from "@/examples/cards/teamCards/HorizontalTeamCard.vue";

//Vue Material Kit 2 components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";

// sections
import PresentationCounter from "./Sections/PresentationCounter.vue";
import PresentationPages from "./Sections/PresentationPages.vue";
import PresentationExample from "./Sections/PresentationExample.vue";
import data from "./Sections/Data/designBlocksData";
import BuiltByDevelopers from "./Components/BuiltByDevelopers.vue";
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
import PresentationInformation from "./Sections/PresentationInformation.vue";

//images
import achille1 from "@/assets/img/achille1.jpg";
import wavesWhite from "@/assets/img/waves-white.svg";

//dep
import Typed from "typed.js";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    // eslint-disable-next-line no-unused-vars
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });
  }
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-1">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <Header id="acceuil">
      <div
        class="container-fluid"
        :style="{
          background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))'
        }"
      >
        <div
          class="page-header min-vh-80 py-6 py-md-5 my-sm-0 mb-3 border-radius-xl"
          :style="{
            backgroundImage: `url(${wavesWhite})`
          }"
          loading="lazy"
        >
          <span class="mask bg-gradient-dark"></span>
          <div class="container">
            <div class="row align-items-center mt-7">
              <div class="col-lg-6">
                <h1 class="text-white">
                  Au-delà de mon
                </h1>
                <h1 class="text-white">
                  <span class="text-white" id="typed"></span>
                </h1>
                <div id="typed-strings">
                  <h1>expertise technique</h1>
                  <h1>expérience,</h1>
                </div>
                <h1 class="text-white text-uppercase"> j’apporte une valeur de conseil</h1>
              </div>
              <div class="col-lg-6 ms-auto mt-lg-0 mt-6">
                  <HorizontalTeamCard
                    class="mt-4"
                    :image="achille1"
                    :profile="{ name: 'Achille DJEGNON', link: 'javascript:;' }"
                    :position="{ label: 'CHEF PROJET / ANALYSTE PROGRAMMEUR / DEVELOPPEUR D`APPLICATION WEB ET MOBILE', color: 'warning' }"
                    description="Je suis un passionné de technologie qui aime partager des idées et des histoires. N'hésitez pas à me contacter !"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    <!--/div-->
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6" id="about">
    <PresentationCounter />
    <BuiltByDevelopers />
  </div>
    <!--PresentationInformation /-->
    <PresentationExample :data="data" />
    <PresentationPages />
    <PresentationTestimonials />

    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 ms-auto">
            <h4 class="mb-1">Merci pour la confiance!</h4>
            <p class="lead mb-0">Nous fournissons les meilleurs produits Web</p>
          </div>
          <div class="col-lg-5 me-lg-auto my-lg-auto text-lg-end mt-5">
            <MaterialSocialButton
              route="https://www.linkedin.com/in/achille-djegnon-6a3144153"
              component="linkedin"
              color="linkedin"
              label="LinkedIn"
            />
            <MaterialSocialButton
              route="https://github.com/achdj"
              component="github"
              color="github"
              label="Github"
            />
          </div>
        </div>
      </div>
    </div>
  
  <DefaultFooter />
</template>
