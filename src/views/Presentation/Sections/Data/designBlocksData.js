/*
=========================================================
* Vue Material Kit 2 - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-material-kit-pro
* Copyright 2021 Achille DJEGNON (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

import banking from "@/assets/img/app/banking.png";
import masfinance from "@/assets/img/app/masfinance.png";
import agency from "@/assets/img/app/agency.png";
import zocentive from "@/assets/img/app/zocentive.png"
import go from "@/assets/img/app/go.png";;
import pup from "@/assets/img/app/pup.png";
import tijobs from "@/assets/img/app/tijobs.png";
import tibar from "@/assets/img/app/tibar.png";
import ticommerce from "@/assets/img/app/ticommerce.png";
import tihotel from "@/assets/img/app/tihotel.png";
import sunu from "@/assets/img/app/sunu.png";
import cagecfi from "@/assets/img/app/cagecfi.png";
import holyca from "@/assets/img/app/holyca.png";
import qrpay from "@/assets/img/app/qrpay.png";
import samaimf from "@/assets/img/app/samaimf.png";
//import zocentive from "@/assets/img/app/zocentive.png";
//import zocentive from "@/assets/img/app/zocentive.png";

export default [
  {
    heading: "Analyste programmeur",
    description: "Almas Technology",
    items: [
      {
        image: holyca,
        title: "Holyca Group",
        subtitle: "J'ai eu à travailler sur l'application mobile qui met en relation des clients et la société afin qu'ils puissent souscrire aux services que propose le groupe et suivre l'évolution de leur dossier.",
        route: "https://drive.google.com/file/d/1J0f5l5OtmCOuLI2tpH_9fA2VooMq-imI/view?usp=drive_link",
        pro: false
      },
      {
        image: qrpay,
        title: "QrPay",
        subtitle: "QrPay est une application mobile qui facilite les transactions mobiles disponibles sur les différents opérateurs en quelques clics.",
        route: "https://drive.google.com/file/d/1O0aZLtiPVMJxPWWoUftduxw6nx5uV45G/view?usp=drive_link",
        pro: false
      },
      {
        image: samaimf,
        title: "Sama Imf",
        subtitle: "Sama Imf met à la disposition des microfinances un systeme leur permettant de faire du sms banking et une application mobile pour les clients de la microfinance qui leur permettra d'effectuer facilement des dépôts sans que ces derniers n'aient besoin de se déplacer.",
        route: "https://samaimf.com/",
        pro: false
      },
      {
        image: tijobs,
        title: "TiJobs",
        subtitle: "Cette application faciite la mise en relation des demandeurs d'emplois et des employeurs.",
        route: "https://drive.google.com/file/d/1P7X6slZAqe-j0YOn7uqZ0bSF0Kxj364X/view?usp=drive_link",
        pro: false
      },
    ]
  },
  {
    heading: "Développeur Web & Mobile",
    description: "Mastersolut",
    items: [
      {
        image: banking,
        title: "Mobile banking",
        subtitle: "Mobile banking est conçue pour répondre aux besoins financiers personnels et professionnels des clients de microfinance, leurs permettant de réaliser une multitude de tâches en quelques clics.",
        route: "https://play.google.com/store/apps/details?id=com.memad.mobile_banking&hl=fr&gl=US",
        pro: false
      },
      {
        image: agency,
        title: "Mobile agency",
        subtitle: "Mobile agency est une application mobile conçue pour les agents de collecte des microfinances.",
        route: "",
        pro: true
      },
      {
        image: masfinance,
        title: "Masfinance",
        subtitle: "J'ai eu a travailler sur des modules de l'application web de gestion des microfinances.",
        route: "",
        pro: true
      }
    ]
  },
  {
    heading: "Back End Developer",
    description: "Mia Group",
    items: [
      {
        image: zocentive,
        title: "Zocentive",
        subtitle: "zocentive pousse les utilisateurs à faire du sport tout en étant récompensé par des challenges.",
        route: "https://drive.google.com/file/d/1PnoXtt1u0mfEckWn6y7NDvw-kxQTaWvt/view?usp=drive_link",
        pro: true
      },
      {
        image: go,
        title: "Go",
        subtitle: "J'ai eu à développer l'application web pour la gestion des trajets de bus, qui est le back office de l'application mobile qui y ait couplé.",
        route: "",
        pro: true
      },
      {
        image: pup,
        title: "Pick up point",
        subtitle: "Pup a pour but de rapprochez les stores des utilisateurs.",
        route: "",
        pro: true
      },
    ]
  },
  {
    heading: "Analyste programmeur",
    description: "Tabis technology",
    items: [
      {
        image: tibar,
        title: "TiBar",
        subtitle: "Tibar est un logiciel de gestion des bars et restaurants même à distance.",
        route: "https://play.google.com/store/apps/details?id=developer.own.tibar&hl=fr&gl=US",
        pro: true
      },
      {
        image: tihotel,
        title: "TiHotel",
        subtitle: "J'ai contribué au développement de l'application mobile Tihotel qui permet aux utilisateurs de réserver des chambres d'hôtels et à l'administration de gérer les activités de l'hôtel.",
        route: "https://play.google.com/store/apps/details?id=developer.own.tihotel&hl=fr&gl=US",
        pro: true
      },
      {
        image: ticommerce,
        title: "TiCommerce",
        subtitle: "Ticommerce contribue la gestion des commerces même à distance.",
        route: "https://play.google.com/store/apps/details?id=developer.own.tico&hl=fr&gl=US",
        pro: true
      },
    ]
  },
  {
    heading: "Analyste programmeur",
    description: "Sunu Sante",
    items: [
      {
        image: sunu,
        title: "Sunu PGS",
        subtitle: "C'est une application web pour la gestion des prises en charge des clients de l'assurance santé.",
        route: "",
        pro: true
      },
    ]
  },
  {
    heading: "Développeur d’application web",
    description: "Cagecfi",
    items: [
      {
        image: cagecfi,
        title: "Cagecfi Réservation",
        subtitle: "J'ai eu à développer une plateforme de réservation et de gestion de lieu d’évènement.",
        route: "",
        pro: true
      },
    ]
  },
];
