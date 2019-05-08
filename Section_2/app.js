new Vue({
  el: "#app",
  data: {
    helloWorld: "Hello World!",
    nameURL: "http://www.yahoo.com",
    google: "http://www.google.com",
    classes: ["one", "two"],
    amount: 0,
    x: 0,
    y: 0
  },
  methods: {
    increaseBy(amnt) {
      this.amount = this.amount + amnt;
    },
    greet() {
      return `Helooowwww!`;
    },
    hello(time) {
      return `Helooowwww! and good ${time}`;
    },
    alert() {
      alert("abc");
    },
    updateCoordinates(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});

console.log("loaded");
