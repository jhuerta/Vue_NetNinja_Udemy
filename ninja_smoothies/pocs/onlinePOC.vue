<template>
  <div>
    <h1>This is a POC Prototype</h1>
    <h1>Hellow {{ name }}!</h1>
    <h1>We are {{ myroute }}!</h1>
  </div>
</template>

<script>
export default {
  name: "myComponentPoc",
  props: {
    name: {
      type: String,
      default: "abc"
    }
  },
  computed: {
    myroute() {
      return this.$route;
    }
  }
};
</script>

<style lang="scss" scoped>
$font-stack: Helvetica, sans-serif;
$primary-color: rgb(146, 3, 241);

h1 {
  font: 200% $font-stack;
  color: $primary-color;
}
</style>