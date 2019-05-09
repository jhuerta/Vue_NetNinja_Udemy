<template>
  <div id="app">
    {{ message }}
    <Navbar />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar: Navbar
  },
  data() {
    return {
      message: "some value here"
    };
  }
};
</script>

<style>
h1 {
  color: #444;
  font-weight: normal;
}
</style>
