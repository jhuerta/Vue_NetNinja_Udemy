<template>
  <div>
    <button @click="executeThis()">Run This</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    executeThis: {
      type: Function
    }
  }
};
</script>

<style lang="scss" scoped></style>
