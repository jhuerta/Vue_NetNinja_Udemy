<template>
  <div>
    ---
    <nav>
      <ul>
        <li><a href="#"> Home </a></li>
        <li><a href="#"> About </a></li>
        <li><a href="#"> Contact </a></li>
      </ul>
    </nav>
    ---
    <h1>Some people</h1>
    <SomePeople
      @deleteUser="removeUser"
      :people="trup.filter(t => t.age <= 40)"
    />
    <h1>Older People</h1>
    <SomePeople :people="olderPeople" />
    <hooks />
    <input v-focus />

    <Posts />
  </div>
</template>

<script>
import { users } from "./data.js";
import SomePeople from "./SomePeople.vue";
import hooks from "./hooks.vue";
import Posts from "./Posts";

export default {
  components: {
    SomePeople,
    hooks,
    Posts
  },
  methods: {
    removeUser({ name }) {
      this.trup = this.trup.filter(t => t.name != name);
    }
  },
  directives: {
    focus: {
      // directive definition
      inserted: function(el) {
        el.focus();
      }
    }
  },
  name: "Navbar",
  data() {
    return {
      name: "name",
      trup: users
    };
  },
  computed: {
    olderPeople() {
      return this.trup.filter(p => p.age >= 40);
    }
  }
};
</script>

<style>
ul {
  background-color: aqua;
}
</style>
