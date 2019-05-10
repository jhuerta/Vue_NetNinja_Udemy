<template>
  <span>
    <div>This is the name:{{ this.$route.params.name }}</div>
    <div>This si the ID: {{ this.$route.params.id }}</div>
    <Parent />
  </span>
</template>

<script>
import Parent from "@/components/Parent";
export default {
  name: "TestURL",
  components: {
    Parent
  }
};
</script>

<style lang="scss" scoped></style>
