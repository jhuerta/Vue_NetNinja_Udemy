<template>
  <div>
    <button @click="name = 'other thing'">{{ name }}: HANGE DATE</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Juan"
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
    console.log(this.name);
  },
  created() {
    console.log("Created");
    console.log(this.name);
  },
  beforeMounted() {
    console.log("beforeMounted");
    console.log(this.name);
  },
  mounted() {
    console.log("Mounted");
    console.log(this.name);
  },
  beforeUpdate(event) {
    console.log(event);
    console.log("beforeUpdate");
    console.log(this.name);
  },
  updated() {
    console.log("updated");
    console.log(this.name);
  }
};
</script>