<script>
import { CalculationInterpolation } from "sass";
import { store } from "../store";
export default {
  name: "Card",
  props: {
    project: Object,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    nullImage() {
      let cover_image;
      if (this.project.image == null) {
        cover_image = `placeholder.png`;
      } else {
        cover_image = this.project.image;
      }

      return `${this.store.apiPath}/storage/${cover_image}`;
    },
  },
};
</script>
<template lang="">
  <div class="col-3">
    <div class="card" style="width: 18rem">
      <img :src="`${nullImage()}`" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">
          {{ project.description }}
        </p>
        <div class="badge rounded-pill text-bg-primary me-2" v-for="tech in project.technology" :key="tech.id">
            {{ tech.technology }}
        </div>
      </div>
    </div>

  </div>
</template>
<style lang="scss"></style>
