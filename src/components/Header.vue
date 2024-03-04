<script>
import { store } from "../store";

export default {
  name: "Header",
  data() {
    return {
      store, // This makes the store available in the template
    };
  },
};
</script>
<template>
  <header>
    <div class="logo fs-1 fw-bolder">Logo</div>
    <div class="menu">
      <ul class="d-flex list-unstyled">
        <li class="me-4" v-for="(item, index) in store.menu" :key="index">
          <router-link class="text-dark text-decoration-none fw-bold" :to="{ name: item.name }">{{ item.label }}</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>
<style lang="scss">
header {
  width: 100%;
  height: 100px;
  background-color: rgb(206, 206, 206);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 200px;
}
</style>
