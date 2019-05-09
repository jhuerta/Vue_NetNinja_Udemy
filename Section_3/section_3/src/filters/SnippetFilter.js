import Vue from "vue";

Vue.filter("snippet", (val, length) => {
  if (!val || typeof val != "string") {
    return "";
  }
  return val.slice(0, length);
});

Vue.filter("bold", (val, text) => {
  if (!val || typeof val != "string") {
    return "";
  }

  if (!text || typeof text != "string") {
    return val;
  }

  console.log(val);
  console.log(text);
  const changedText = val.replace(text, `<b>${text}</b>`);
  console.log(changedText);

  return changedText;
});
