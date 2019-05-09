<template>
  <div>
    <div v-for="(person, index) in people" :key="index">
      {{ person.name }}
      <span @click="deleteFriend(person.name)" class="clickable">Remove</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    people: {},
    titleString: {}
  },
  methods: {
    deleteFriend(name) {
      this.$emit("deleteUser", { name });
    }
  }
};
</script>

<style>
.clickable{
  cursor: pointer;
}
</style>
