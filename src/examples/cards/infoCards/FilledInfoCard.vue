<script setup>
defineProps({
  color: {
    text: String,
    background: {
      validator(value) {
        return [
          "primary",
          "secondary",
          "info",
          "success",
          "warning",
          "error",
          "light",
          "dark",
          "white",
        ].includes(value);
      },
    },
    default() {
      return {
        text: "",
        background: "bg-gray-100",
      };
    },
  },
  icon: {
    type: Object,
    required: true,
    component: String,
    color: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: false,
  },
  action: {
    type: Object,
    required: true,
    label: {
      type: Object,
      required: true,
      text: String,
      color: String,
    },
    route: {
      type: String,
      required: true,
    },
  },
});
// gets rating
const ratings = (rating) => {
  let ratingValue;
  if (rating == 1) {
    ratingValue = `
    ${
      color
        ? `
    <i class="fas fa-star text-white" aria-hidden="true"></i>
    <i class="far fa-star text-white" aria-hidden="true"></i>
    <i class="far fa-star text-white" aria-hidden="true"></i>
    <i class="far fa-star text-white" aria-hidden="true"></i>
    <i class="far fa-star text-white" aria-hidden="true"></i>
    `
        : `
    <i class="fas fa-star" aria-hidden="true"></i>
    <i class="far fa-star" aria-hidden="true"></i>
    <i class="far fa-star" aria-hidden="true"></i>
    <i class="far fa-star" aria-hidden="true"></i>
    <i class="far fa-star" aria-hidden="true"></i>

    `
    }
`;
  } else if (rating == 2) {
    ratingValue = `
    ${
      color
        ? `
    <i class="fas fa-star text-white" aria-hidden="true"></i>
    <i class="fas fa-star text-white" aria-hidden="true"></i>
    <i class="far fa-star text-white" aria-hidden="true"></i>
    <i class="far fa-star text-white" aria-hidden="true"></i>
    <i class="far fa-star text-white" aria-hidden="true"></i>
          `
        : `
    <i class="fas fa-star" aria-hidden="true"></i>
    <i class="fas fa-star" aria-hidden="true"></i>
    <i class="far fa-star" aria-hidden="true"></i>
    <i class="far fa-star" aria-hidden="true"></i>
    <i class="far fa-star" aria-hidden="true"></i>
        `
    }
`;
  } else if (rating == 3) {
    ratingValue = `
    ${
      color
        ? `
         <i class="fas fa-star text-white" aria-hidden="true"></i>
    <i class="fas fa-star text-white" aria-hidden="true"></i>
    <i class="fas fa-star text-white" aria-hidden="true"></i>
    <i class="far fa-star text-white" aria-hidden="true"></i>
    <i class="far fa-star text-white" aria-hidden="true"></i>
          `
        : `
    <i class="fas fa-star" aria-hidden="true"></i>
    <i class="fas fa-star " aria-hidden="true"></i>
    <i class="fas fa-star " aria-hidden="true"></i>
    <i class="far fa-star " aria-hidden="true"></i>
    <i class="far fa-star " aria-hidden="true"></i>
        `
    }
`;
  } else if (rating == 4) {
    ratingValue = `
    ${
      color
        ? `
    <i class="fas fa-star text-white" aria-hidden="true"></i>
    <i class="fas fa-star text-white" aria-hidden="true"></i>
    <i class="fas fa-star text-white" aria-hidden="true"></i>
    <i class="fas fa-star text-white" aria-hidden="true"></i>
    <i class="far fa-star text-white" aria-hidden="true"></i>
`
        : `
    <i class="fas fa-star " aria-hidden="true"></i>
    <i class="fas fa-star " aria-hidden="true"></i>
    <i class="fas fa-star " aria-hidden="true"></i>
    <i class="fas fa-star " aria-hidden="true"></i>
    <i class="far fa-star " aria-hidden="true"></i>

        `
    }
`;
  } else if (rating == 5) {
    ratingValue = `
    ${
      color
        ? `
    <i class="fas fa-star text-white" aria-hidden="true"></i>
    <i class="fas fa-star text-white" aria-hidden="true"></i>
    <i class="fas fa-star text-white" aria-hidden="true"></i>
    <i class="fas fa-star text-white" aria-hidden="true"></i>
    <i class="fas fa-star text-white" aria-hidden="true"></i>
`
        : `
    <i class="fas fa-star" aria-hidden="true"></i>
    <i class="fas fa-star" aria-hidden="true"></i>
    <i class="fas fa-star" aria-hidden="true"></i>
    <i class="fas fa-star" aria-hidden="true"></i>
    <i class="fas fa-star" aria-hidden="true"></i>

        `
    }
`;
  }
  return ratingValue;
};
</script>
<template>
  <div class="rating mt-3" v-html="ratings(rating)"></div>
  <div
    class="info-horizontal border-radius-xl d-block d-md-flex"
    :class="`${color.background ?? ''}`"
  >
    <i class="material-icons text-3xl" :class="`text-${icon.color}`">{{
      icon.component
    }}</i>
    <div class="ps-0 ps-md-3 mt-3 mt-md-0">
      <h5 :class="`text-${color.text ?? ''}`">{{ title }}</h5>
      <p :class="`text-${color.text ?? ''}`">
        {{ description }}
      </p>
      <a
        :href="action.route"
        class="icon-move-right"
        :class="`text-${action.label.color ?? 'success'}`"
      >
        {{ action.label.text }} {{ rating }}
        <i class="fas fa-arrow-right text-sm ms-1"></i>
      </a>
    </div>
  </div>
</template>
