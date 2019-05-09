<template>
  <div>
    Filter:
    <input type="text" v-model="searchText">
    <div v-for="post in filteredPosts" :key="post.id">
      {{ post.id }} - {{ post.title }}
      <div v-html="bolded(post.body)"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      searchText: ""
    };
  },
  methods: {
    bolded(text) {
      return text.replace(this.searchText, `<b>${this.searchText}</b>`);
    }
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(p => p.body.includes(this.searchText));
    },
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
        self.posts = [p.data[0]];
      });
    }, 500);
  }
};
</script>
