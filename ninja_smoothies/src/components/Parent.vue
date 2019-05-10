<template>
  <div>
    <Child :executeThis="toExecute()" />
  </div>
</template>

<script>
import Child from "@/components/Child.vue";
export default {
  name: "Parent",
  components: {
    Child
  },
  methods: {
    toExecute() {
      return () => {
        alert("it works");
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>
