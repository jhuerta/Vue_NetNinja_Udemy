<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      {{ post.id }} - {{ post.title }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: []
    };
  },
  computed: {
    olderPosts() {
      return this.posts.filter(p => p.id > 90);
    }
  },
  created() {
    const url = "http://jsonplaceholder.typicode.com/posts";

    // setTimeout(() => {
    //   axios.get(url).then(p => {
    //     self.posts = p.data;
    //     console.log(p.data);
    //     console.log(self.posts);
    //   });
    // }, 500);

    var self = this;
    setTimeout(function() {
      axios.get(url).then(p => {
        self.posts = p.data;
      });
    }, 500);
  }
};
</script>
