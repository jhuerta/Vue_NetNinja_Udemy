<template>
  <div class="profile">
    <h1>Hellow {{user_id}}</h1>
  </div>
</template>



<script>
export default {
  data() {
    return {
      user_id: this.$route.params.user_id
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
