<template>
  <div class="profile">
    <h1>Hellow {{user_id}}</h1>
    <div v-for="user in users" :key="user">
      <router-link :to="{name:'profile', params: {user_id:user}}">{{user}}</router-link>
    </div>
    <button @click="goHome">Redirect to home</button>
    <button @click="goBack">Go Back</button>
    <button @click="goForward">Go Forward</button>
  </div>
</template>



<script>
export default {
  data() {
    return {
      users: [1, 2, 3, 4, 5, 6],
      user_id: this.$route.params.user_id
    };
  },
  methods: {
    updateId() {
      this.user_id = this.$route.params.user_id;
    },
    goHome() {
      // this.$router.push({ name: "home" });
      this.$router.push({ name: "profile", params: { user_id: 123 } });
    },
    goBack() {
      // this.$router.push({ name: "home" });
      this.$router.go(-1);
    },
    goForward() {
      // this.$router.push({ name: "home" });
      this.$router.go(1);
    }
  },
  watch: {
    // $route: "updateId",
    $route(to, from, next) {
      console.log(to, from, next);
      this.user_id = this.$route.params.user_id;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
